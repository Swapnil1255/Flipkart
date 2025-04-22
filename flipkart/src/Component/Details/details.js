import React,{useState,useEffect} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const base_url = "https://flipkart-pkev.onrender.com"

const DetailDisplay = () => {

    let navigate = useNavigate()
    let [searchParams] = useSearchParams()
    let [productDetails,setproductDetails] = useState('')
    let [mealId] = useState(sessionStorage.getItem('mealId'))
    let param=useParams();
    let pid=param.pid;
    console.log(pid);
    const productDetail = async() => {
        const rdata = await axios.get(`${base_url}/details/${pid}`);
        setproductDetails(rdata.data[0])
    }

    useEffect(() => {
        productDetail()
    })

    const proceed = () => {
        
        navigate(`/placeOrder/${productDetails.pid}`)
    }

    const renderDetails = () => {
        if(productDetails){
            return(
                <>
                    <Header/>
                    <div className="detail">
                        <div className="product_image">
                            <img src={productDetails.image} alt={productDetails.pname}/>
                        </div>
                        <div className="product_details">
                            <h4>{productDetails.pname}</h4>
                            <h3>&#8377;{productDetails.price}</h3>
                            
                            <h2>Bank Offers!</h2>
                        
                            <br/>
                            
                            <br/>
                            <br/>
                            <button name="Buy" onClick={proceed}>Buy Now</button>
                            <button name="Buy" onClick={proceed}>Add to Cart</button>

                        </div>
                    </div>
                
                </>
            )
        }
    }


    return(
        <>
            <div className='main'>
                {renderDetails()}
            </div>
            
        </>
    )
}

export default DetailDisplay