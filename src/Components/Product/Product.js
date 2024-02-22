import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Product = ({handleAddProduct}) => {
    const {productid} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+productid).then((response)=>{
            response.json().then((data)=>{
                setProduct(data);
            }).catch((error)=>{
                console.log('An error occured',error);
            })
        })
    },[productid]);

    return ( 
        <div className="d-flex justify-content-center">
            <div className="offer-prod-div mt-5 rounded-top" key={product.id} style={{minHeight:'50vh'}}>
                    <NavLink to={'/Product/'+product.id} style={{textDecoration:'none'}} className='d-flex flex-column'>
                        <div><img src={product.image} style={{height:100}}/></div>
                        <div><h6>{product.title}</h6></div>
                        <div><p className="offer-description">{product.description}</p></div>
                        <div><span className="offer-price text-success">${product.price}</span></div>
                    </NavLink>
                    <button onClick={()=>handleAddProduct(product)}  className="btn btn-primary mt-1 ATC-btn fw-semibold">
                        Add to cart
                    </button>
            </div>
        </div>
     );
}
 
export default Product;