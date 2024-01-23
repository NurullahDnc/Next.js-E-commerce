import { count } from "console";
import { CardProductProps } from "../detail/DetailClient";

//? detail adet artırma
interface CounterProps{
    cardProduct: CardProductProps,
    //void func. gelecek
    increaseFunc: ()=> void;
    decreaseFunc: ()=> void;
 
}

const Counter:React.FC<CounterProps> =({cardProduct, increaseFunc, decreaseFunc})=> {
    const buttonStyle = " w-5 md:w-8 h-5 md:h-8 flex border justify-center items-center text-[14px]  md:text-[20px] rounded-md cursor-pointer"
  return (
    <div className="flex gap-2 md:gap-3 items-center ">
      <div className={buttonStyle} onClick={decreaseFunc} >-</div>
      <div>{cardProduct.quantity} </div>
      <div className={buttonStyle} onClick={increaseFunc}>+</div>

    </div>
  )
}

export default Counter;