import { useMyContext } from "../../Contexts/MyContext";

const CartItem=(props)=>{
    const {name,img,price,amount}=props.product;
    const {removeFromCart}=useMyContext();
    return(
        <li className="rounded-sm flex justify-between align-middle bg-slate-300 shadow-md">
           <img className="h-12 " src={img} alt=""/>
           <div className="pr-6 flex flex-col ml-4">
            <div>
            <span className="mr-4 font-extrabold">{name}</span>
            <a  className=" text-red-800" href="/" onClick={(e)=>{
                 e.preventDefault();
                 removeFromCart(props.product);
            }}>X</a>
            </div>
            <div>
                <span>{price}$ X  </span>
                <span>{amount}</span>
            </div>
           
           </div>
           

        </li>
    )
}

export default CartItem;