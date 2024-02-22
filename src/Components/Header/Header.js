import { NavLink } from "react-router-dom";
import ImageLogo from './Images/logo.avif'
import ImageCart from './Images/cart.webp'

const Header = ({cartItems,searchTextCB}) => {

    function searchText($event){
        searchTextCB($event.target.value);
     }

    return ( 
        <div className="position-sticky top-0 start-0 end-0 z-3">
            <nav className="navbar navbar-expand-lg bg-info bg-gradient">
                <div className="container-fluid">
                    <img className="navbar-brand rounded-circle" src={ImageLogo} style={{height:'50px'}} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <NavLink to={'/'} className="nav-link fw-bold">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/ProductsPage'} className="nav-link me-2 fw-bold">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/contact'} className="nav-link fw-bold">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/about'} className="nav-link me-2 fw-bold" >About Us</NavLink>
                            </li>
                            <a href="#" className="nav-item fs-5" style={{textDecoration:'none'}}>
                                <NavLink to={'/cart'}><img src={ImageCart} height={25}/></NavLink>
                                {
                                    cartItems.length === 0 ? '' :
                                    <span className="bg-danger rounded-circle mt-5 cart-icon">
                                        {
                                            cartItems.length === 0 ? '' : cartItems.length
                                        }
                                    </span>
                                }
                            </a>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onInput={searchText}/>
                            <button className="btn btn-outline-success me-2" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        
     );
}
 
export default Header;