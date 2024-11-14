import { useDispatch } from "react-redux";
import { fetchProducts } from "./APIS/productAPI";
import { setProducts } from "./slices/productSlice";

async function Init()
{   const dispatch=useDispatch();
    const products=await fetchProducts();
    if (products)
        dispatch(setProducts(products));
}

export default Init;