

    //text uzunlugu

const TextClip = (text:string) => {
  
    //text uzunlıgı 55 az ise text return et
    if(text.length < 55 ) return text;

    //text 0, 55 arasında ise sonuna ... koy return et
    return text.substring(0, 55) +"..."
}

export default TextClip
