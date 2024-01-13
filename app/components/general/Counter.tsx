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
    const buttonStyle = "w-8 h-8 flex border justify-center items-center text-xl rounded-md cursor-po"
  return (
    <div className="flex gap-4 items-center ">
      <div className={buttonStyle} onClick={decreaseFunc} >-</div>
      <div>{cardProduct.quantity} </div>
      <div className={buttonStyle} onClick={increaseFunc}>+</div>

    </div>
  )
}

export default Counter;