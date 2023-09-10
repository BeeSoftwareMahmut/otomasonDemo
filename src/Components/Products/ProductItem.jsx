import { useMyContext } from "../../Contexts/MyContext";
import Button from "../UI/Button"

const ProductItem=(props)=>{
    const {addToCart}=useMyContext();
    const {name,description,img,price}=props.product;
    return <li className="flex flex-col gap-2 bg-neutral-50 shadow-2xl rounded-md pb-3 px-3 w-1/5">

        <img className="h-48 " src={img} alt=""/>
        
        <h1 className="text-lg font-bold">{name}</h1>
     <span>{description}</span>
     <div className="flex justify-between">
        <div>
        <span className="text-amber-400 text-2xl">★</span> 
        <span className="text-amber-400 text-2xl ">★</span> 
        <span className="text-amber-400 text-2xl">★</span> 
        <span className="text-amber-400 text-2xl">★</span> 
        <span className="text-slate-400 text-2xl">★</span> 
        </div>
     
     <span className="font-extrabold">{price}$</span>
     </div>
     
     
     <Button onClick={()=>addToCart(props.product)} className="bg-green-700 p-2 w-52 mx-auto text-center rounded-lg flex items-center justify-center">Sepete Ekle</Button>
    </li>
}

export default ProductItem;