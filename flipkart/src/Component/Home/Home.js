import React,{useState,useEffect} from 'react';
import './Home.css';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {link} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const base_url = "https://flipkart-pkev.onrender.com";

const Home = () => {
    let param=useParams();
    let category=param.id;

    const[categoryData,setCategoryData] = useState('')
    const [scategory,setScategory] = useState('')

    useEffect(() => {
        fetch(`${base_url}/category`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setCategoryData(data)
        })
    },[])


    const renderCategory = (data) => {
        if(data){
            return data.map((item) => {
                
                return(
                    
                    <li key={item.id} value={item.id} id={item.category} onClick={handleCity}>
                        <img src={item.view} alt={item.id}/>
                        <h3>{item.category}</h3>
                    </li>
                )
            })
        }
    }

    const handleCity = (event) => {
        console.log(event.target.alt)
        let stateId =event.target.alt;
        fetch(`${base_url}/sub_category?category_id=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setScategory(data)
            console.log();
        })
        
    }
    const renderScategory = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <Link to={`/products/${item.id}`}>
                        <li key={item.id}>
                            {item.sub_category}
                        </li>
                    </Link>
                )
            })
        }
    }


    return(
        <>
            <Header/>

            <br/>
            <div className='part1'>
            <ul className='category container-fluid'>
                {renderCategory(categoryData)}
            </ul>
            </div>
             
            <div className='sub_category container-fluid'>
                <ul style={{listStyle:'none'}}>
                  {renderScategory(scategory)}    
                </ul>   
            </div>
            
            <div className="row3">
                <img src="https://i.ibb.co/HVZJhSR/bank-offer-Poster.png" alt="bankoffer"/>
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="https://i.ibb.co/RY4XbNs/offer1.png" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.ibb.co/fQRxk7B/offer2.png" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.ibb.co/GFQrhd7/offer4.png" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className='slider1 '>
                <div className='sub_section'>
                    <img src='https://i.ibb.co/n75bqz7/iphone-13-pro-max-mllj3hn-a-apple-original-imag6vpgphrzuffg.jpg' alt='iphone'></img>
                    <div>
                        <h2>i phone13 pro</h2>
                        <h3>Top Offers!</h3>
                        <h4>40% off on popular brands</h4>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/0sqGTPb/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.webp' alt='powerBank'></img>
                    <div>
                        <h2>Mi,hp,syska</h2>
                        <h3>Top Deals</h3>
                        <h4>PowerBanks</h4>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/pRqFxDL/philips-hp8100-46-original-imaemymzuxrnzfjb.webp' alt='hair-dryer'></img>
                    <div>
                        <h2>Hair dryers</h2>
                        <h3>Top Brands</h3>
                        <h4>Philips,Syska</h4>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/zh7Y0gn/original-imafkykednshkhx5.webp' alt='Printers'></img>
                    <div>
                        <h2>Hp printers</h2>
                        <h3>Top Brands</h3>
                        <h4>Hp,Dell,Lenovo</h4>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/ZM4Pf1Z/va2215-h-full-hd-21-5-va2215-h-viewsonic-original-imaghevavzjwxfhm.webp' alt='Moniters'></img>
                    <div>
                        <h2>ViewSonic Moniters</h2>
                        <h3>Top Brands</h3>
                        <h4>Hp,Dell,Lenovo</h4>
                    </div>
                </div>

                <div className='sub_section'>
                    <p>
                        Best of Electronics
                    </p>
                    <div style={{wdth:'100%',height:'147px'}}>
                        <img src='https://i.ibb.co/gJxqbLS/background-of-electronics.webp' alt='electronics' style={{width:'90%',height:'147px'}}></img>
                    </div>
                </div>
            
            </div>

            <div className='slider1 '>
                <div className='sub_section'>
                    <img src='https://i.ibb.co/vLgwBNP/images-q-tbn-ANd9-Gc-QIo-X5-Tjk-SXZVi2z-e1cs2-Qt30ke-UCetjn-T7w-usqp-CAU.jpg' alt='tops'></img>
                    <div>
                        <h2>panjabi tops</h2>
                        <h3>Top Offers!</h3>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/xGfLdXQ/473-Wx593-H-464531848-navy-MODEL.jpg' alt='tshirt'></img>
                    <div>
                        <h2>Tshirts for men</h2>
                        <h3>Top Deals</h3>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/bdSFbvy/812f-SWxbgt-L-AC-SR462-693.jpg' alt='shirts'></img>
                    <div>
                        <h2>Formal Shirts</h2>
                        <h3>Top Brands</h3>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/6ZXkd4R/half-sleav-girls-top.jpg' alt='girlstop'></img>
                    <div>
                        <h2>girlstop</h2>
                        <h3>Top deals</h3>
                    </div>
                </div>

                <div className='sub_section'>
                    <img src='https://i.ibb.co/rvmBHWj/71-PPvc3-GB7-L-SY550.jpg' alt='jeans'></img>
                    <div>
                        <h2>Branded jeans</h2>
                        <h3>Top Offers!</h3>
                    </div>
                </div>

                <div className='sub_section'>
                    <p>
                        Best of Electronics
                    </p>
                    <div style={{width:'90%',height:'147px'}}>
                        <img src='https://i.ibb.co/ZLCcs8L/Fashion-background.webp' alt='Fashion' style={{width:'100%',height:'147px'}}></img>
                    </div>
                </div>
            
            </div>
            <Footer/>


            
        </>
    )
    
}

export default Home;

