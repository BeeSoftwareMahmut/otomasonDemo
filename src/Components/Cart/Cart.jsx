import Button from "../UI/Button"
import CartItem from "./CartItem"
import { useMyContext } from "../../Contexts/MyContext"

const Cart = (props) => {

    const {items,totalPrice,resetTheCart}=useMyContext()

    const cartItems=items.map((product)=>{
        return(
            <CartItem  key={product.id} product={product}></CartItem>
        )
    })

    return (
        <div className="h-screen sm:w-48 pt-5 pl-4 pr-2 fixed top-0 right-0 md:w-80 z-40 bg-slate-100">
        
            <div className="flex justify-between my-3"> 
                <span>Sepetim</span>
                <a onClick={props.hideCartInfo} className="text-lg text-red-600" href="/" >X</a>
            </div>

            <ul className="flex gap-1 flex-col">
            {cartItems}
            </ul>

            <div className=" my-4 flex justify-between">
                <span className="font-semibold">Toplam Tutar:</span>
                <span className="font-bold">{totalPrice}$</span>
            </div>
           {items.length >0 ? (<div>
            <Button className="mb-4 mx-auto pr-24 pl-24  py-3 rounded-xl  bg-lime-500">Sipariş Ver</Button>
            <Button onClick={resetTheCart} className=" mx-auto pr-28 pl-28  py-3 rounded-xl bg-red-700">Temizle</Button>  </div>
           ):""}
          


        </div>
    )
}

export default Cart;