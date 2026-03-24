import { Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import ProductPage from "./Products";

export default function Header(){

   return (
    <>
     <Link to={<Home />}>Home</Link>
     <Link to={<About />}>About</Link>
     <Link to={<Contact />}>Contact</Link>
     <Link to={<ProductPage />}>Products</Link>
    </>
   
   );
}