import { useEffect, useState } from "react";

const List = () => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [id, setId] = useState('')
    
    useEffect(()=> {
            const getProduct = async () => {
        
                try {
                setError('');
                setIsLoading(true)

             const response = await fetch(
                `https://64b70476df0839c97e165d10.mockapi.io/api/id/products/${id}`
                );
                // console.log(response)

                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }

            const data = await response.json();
            setProduct(data);   
            } catch (e) {
                setError(e.message);
            }    finally {
                setIsLoading(false)
            } 
        };

        getProduct();

    }, [id])
   
    return (
        <div className="box">
            <input 
            type="number" 
            placeholder="Enter product id" 
            value={id} 
            onChange={(e) => setId(e.target.value)}
            />

                {error && <h1>{error}</h1>}
                {isLoading && <h1>Loading...</h1>}

          <ul> {product && <li>
            <img className="img" src={product.imgUrl} alt="" />
            <span className="price">Price: {product.price} $</span>
            </li>}</ul> 
          <h2>{product.name}</h2>
          <p>{product.description}</p>
         
        </div>
       
    )
}
export default List;
