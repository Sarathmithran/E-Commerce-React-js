import Banner from "../Banner/Banner";
import OfferSection from "../OfferSection/OfferSection";

const Home = (props) => {
    // console.log('home',props.textBoxInput);
    const userText = props.textBoxInput;
    const handleAddProduct = props.handleAddProduct
    return ( 
        <>
        <Banner/>
        <OfferSection userText={userText} handleAddProduct={handleAddProduct}/>
        </>
     );
}
 
export default Home;