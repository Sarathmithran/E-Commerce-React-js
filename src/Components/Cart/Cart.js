import './Cart.css';

const Cart = ({cartItems,handleRemoveProduct,handleAddProduct,handleCartClearance}) => {

    return ( 
        <div className='container' style={{minHeight: '60vh'}}>
            <div className='cart-header fs-2 fw-semibold pt-2'>Cart items</div>
            {
                cartItems.length === 0 && (
                    <div className='d-flex flex-column justify-content-center  fs-1 fw-normal  cart-empty opacity-50' style={{height:'52vh'}}>cart is empty</div>
                )
            }
            <div className='d-flex justify-content-end pt-2'>
                {
                    cartItems.length >= 1 &&(
                        <button className='btn btn-warning text-white fw-semibold' onClick={handleCartClearance}>Clear all</button>
                    )
                }
            </div>

            <div>
                {
                cartItems.map((item) =>{
                    return( 
                            <div className='row justify-content-center pt-2 pb-3'>
                                <div className='col-1'>
                                    <img src={item.image}height={60}/>
                                </div>
                                <div  className='col-5'>
                                    <h6 className='pt-3 ps-2'>{item.title}</h6>
                                </div>
                                <div className='col pt-3 fw-semibold'>
                                    Q - {item.quantity}
                                </div>
                                <div className='col-2'>
                                    <button className='btn btn-danger mt-2' onClick={()=>handleRemoveProduct(item)}>-</button>
                                </div>
                                <div className='col-2'>
                                    <button className='btn btn-success mt-2' onClick={()=>handleAddProduct(item)}>+</button>
                                </div>
                                <div className='col pt-3'>
                                    ${item.quantity*item.price}
                                </div>
                            </div>
                    )
                })
                }
            </div>
        </div>
     );
}
 
export default Cart;