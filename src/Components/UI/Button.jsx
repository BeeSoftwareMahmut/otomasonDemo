
const Button=(props)=>{
    return <button onClick={props.onClick} className={`transition-all hover:text-orange-400 hover:bg-stone-50 flex gap-3 text-white text-center ${props.className}`}>
        {props.children}
    </button>
}

export default Button;