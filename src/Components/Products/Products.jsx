
import productsData from "../../ProductsData";
import ProductItem from "./ProductItem";


const Products=()=>{
    
    

    const OurProducts=productsData.map((product)=>{
        return(
            <ProductItem key={product.id} product={product}></ProductItem>
        )
    })
       
    return(
        <main className="w-4/5 mx-auto mt-6">
         <ul className="flex md:flex-row  sm:flex-col justify-around gap-5">
            {OurProducts}
         </ul>
        </main>
    )
}

export default Products;