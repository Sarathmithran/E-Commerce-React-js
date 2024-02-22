import { useContext} from "react";
import { ProductContext } from "../Context";
import { NavLink } from "react-router-dom";
import Images from './Images/no products found.png'

const ProductPage = (props) => {

    const {data} = useContext(ProductContext);

    const handleAddProduct = props.handleAddProduct;

    let userInput = props.textBoxInput;

    let filteredProducts = data?.filter((p) => {
      return p.title.toLowerCase().includes(userInput.toLowerCase());
    });
    
    return ( 
        <div className="d-flex flex-wrap justify-content-center pt-5 bg-light bg-gradient" style={{minHeight:'60vh'}}>
            {
                filteredProducts.length === 0 ? <div><img src={Images} height={300}/></div> :
                filteredProducts?.map((p)=>{
                    return(
                        <div className="offer-prod-div mt-4 rounded-top" key={p.id}>
                              <NavLink to={'/Product/'+p.id} style={{textDecoration:'none'}} className='d-flex flex-column'>
                                <div><img src={p.image} style={{height:100}}/></div>
                                <div><h6>{p.title}</h6></div>
                                <div><span className="offer-rating bg-success text-white p-1 rounded-1">Rating : {p.rating.rate} ({p.rating.count})</span></div>
                                <div><p className="offer-price">${p.price}</p></div>
                              </NavLink>
                              <button className="btn btn-primary ATC-btn fw-semibold" onClick={()=>handleAddProduct(p)}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default ProductPage;