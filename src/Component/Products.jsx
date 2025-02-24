import { useContext } from "react";
import { EspressoContext } from "../ContextApi/Context";


const Products = () => {

    const { name } = useContext(EspressoContext)
    console.log(name);

    return (
        <div>
            <h1>Products</h1>
        </div>
    );
};

export default Products;