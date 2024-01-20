"use client"
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Input from '../general/Input';
import Heading from '../general/Heading';
import CheckBox from '../general/CheckBox';
import { CiUser } from "react-icons/ci";
import ChoiceInput from '../general/ChoiceInput';
import Button from '../general/Button';
import InputFile from '../general/InputFile';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebase from 'firebase/compat/app';
import firebaseApp from '@/libs/firebase';
import { promises } from 'dns';
import { rejects } from 'assert';
import { resolve } from 'path';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { log } from 'console';



export default function CreateForm() {

    const [img, setImg] = useState<File | null>(null)
    // const [uploadedImg, setUploadedImg] = useState<string | null>(null)
    const route = useRouter();

    const categoryList = [
        {
            name: "Ayakkabı",
            icon: CiUser
        },
        {
            name: "Bilgisayar",
            icon: CiUser
        }, {
            name: "Telefon",
            icon: CiUser
        }, {
            name: "Mont",
            icon: CiUser
        }, {
            name: "kazak",
            icon: CiUser
        }, {
            name: "bot",
            icon: CiUser
        },



    ]

    // React Hook Form kütüphanesi
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            description: "",
            price: "",
            brand: "",
            category: "",
            inStock: false,
            image: "",
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        let uploadedImg;

        const handleChange = async () => {
            toast.success("yuklmeme basarılı")
            //*firebase kutuphanesi kulanıldı
            try {
                const storage = getStorage(firebaseApp);
                const storageRef = ref(storage, 'images/shop.jpg');

                const uploadTask = uploadBytesResumable(storageRef, img);

                await new Promise((rejects, resolve) => {
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            // Observe state change events such as progress, pause, and resume
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            rejects(error)
                        },
                        () => {

                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                console.log('File available at', downloadURL);
                                //downloadURL resimi degiskene at
                                uploadedImg =downloadURL;
                                //hata veririse propmis onunde <void>
                                resolve()

                            });
                            
                        }
                    );
                })


            } catch (error) {
                console.log(error);

            }

        }
        //islemler bitmeden asagıya gecme
        await handleChange();

        //tum data ve image'leri new data at
        let newData ={ ...data, image: uploadedImg }
        console.log("uploadedImg", uploadedImg);
        
        //*product post istegi at, newData'yı gonder.
        axios.post("/api/product", newData )
        .then((res)=>{
            toast.success("yukleme basarılı :)")
            route.refresh();
        }).catch((err)=>{
            toast.error("yukleme basarısız !!!")
        })

        console.log(newData, "newData");

    }

    //category izle her degisklik oldugunda degiskene at
    const category = watch('category')

    //category guncel alma? kutuphane ozelikleri
    const setCustomValue = (id: string, value: string) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    //image e.target.file aldım, state attım
    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.value.length > 0) {
            setImg(e.target.files[0])
        }
    }


    return (
        <div>
            <Heading text='Ürün oluştur' center />
            <Input id="name" placeholder='name' type='text' register={register} required errors={errors} />
            <Input id="description" placeholder='description' type='text' register={register} required errors={errors} />
            <Input id="price" placeholder='price' type='number' register={register} required errors={errors} />
            <Input id="brand" placeholder='brand' type='text' register={register} required errors={errors} />
            <CheckBox id='inStock' register={register} label='Ürün Stokta varmı' />
            <div className='flex flex-wrap gap-4'>
                {
                    categoryList.map((cat, i) => (
                        <ChoiceInput
                            key={i}
                            text={cat.name}
                            icon={cat.icon}
                            onClick={(category) => setCustomValue("category", category)}
                            //category degiskeni ile === cat.name esit olanı secilidir
                            selected={category === cat.name} />
                    ))
                }
            </div>
            <input onChange={onChangeFunc} type="file" />


            {/* <InputFile fileFunc={()=> onChangeFunc} type="file" /> */}
            <Button onClick={handleSubmit(onSubmit)} text='Ürün Oluştur' />

        </div>
    )
}

//*storage