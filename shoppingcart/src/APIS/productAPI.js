import axios from "axios";


export async function fetchProducts()
{
    try {
        const response=await axios.get("https://6734a9fba042ab85d11b228f.mockapi.io/api/products")
        return response.data;
    }
     catch (error) {
        console.log(error);
        return false;
    }
}