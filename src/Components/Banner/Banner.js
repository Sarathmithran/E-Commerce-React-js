import Image1 from './Images/img1.webp'
import Image2 from './Images/img2.webp'
import Image3 from './Images/img3.webp'

const Banner = () => {
    return ( 
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true" style={{margin:15}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                    <img src={Image1} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    
                    </div>
                    </div>
                    <div className="carousel-item" >
                    <img src={Image2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        
                    </div>
                    </div>
                    <div className="carousel-item" >
                    <img src={Image3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
            
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
     );
}
 
export default Banner;