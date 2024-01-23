import Banner from "./components/home/Banner";
import Cart from "./components/home/Carts";
import Category from "./components/home/Category";
import ContactUs from "./components/home/ContactUs";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <div>
      <Banner />
      <Products/> 
      <Cart />
      <ContactUs />
    </div>
  )
}
