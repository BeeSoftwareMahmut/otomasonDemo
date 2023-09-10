import Button from "../UI/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useMyContext } from "../../Contexts/MyContext";


const HeaderButton=(props)=>{

    const {items}=useMyContext()

    const totalAmount=items.reduce((total,item)=>total+item.amount,0)

    return(
<Button onClick={props.onClick}  className="bg-blue-800 px-5 pb-2 pt-3 rounded-md">
            <span>
           <FontAwesomeIcon icon={faShoppingCart}/>
            </span>
            <span className="text-lg shadow-sm">Sepetim</span>
            <span className="px-2 py-1 rounded-full text-center bg-slate-950">{totalAmount}</span>
          </Button>
    )
}
export default HeaderButton;