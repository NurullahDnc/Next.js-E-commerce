import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

//* product olusturuma, checkbox urun stokta varmı
interface CheckBoxProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, register, label }) => {
  return (
    <div className=' flex items-center my-2 gap-2'>
      {/* CheckBox içeriği buraya gelecek */}
      <input className='size-4' type="checkbox" id={id} {...register(id)} />
      <label className='text-grays' htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
