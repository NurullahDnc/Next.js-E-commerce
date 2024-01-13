
    //text uzunlugu

const TextClip = (text:string) => {
  
    //text uzunlıgı 55 az ise text return et
    if(text.length < 25 ) return text;

    //text 0, 55 arasında ise sonuna ... koy return et
    return text.substring(0, 40) +"..."
}

export default TextClip
