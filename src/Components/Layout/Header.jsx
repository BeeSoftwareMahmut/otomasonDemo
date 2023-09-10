
import HeaderButton from "./HeaderButton";


const Header=(props)=>{
    return(
        <header className=" flex justify-between w-4/5 mx-auto  p-3  border-b-slate-600 mt-1">
          
          <h2 className="text-lg font-extrabold">Trend Store</h2>
          <HeaderButton onClick={()=>props.setCartIsVisible(true)}/>
          
        </header>
    ) 
}

export default Header;