import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';
import axios from 'axios';
import CostFilter from '../filters/costFilter';
import Header from '../Header';
import Footer from '../Footer';

const base_url = "https://flipkart-pkev.onrender.com";


const Listing = () => {
    let params = useParams();

    const [restList,setRestList] = useState();
    let subcateid = params.id;
    useEffect(() => {
       
        axios.get(`${base_url}/products?sub_category_id=${subcateid}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    const setDataPerFilter = (data) => {
        setRestList(data)
    }
    
    return(
        <>
            <Header/>
            <br/>

            <div className="main">
                <div className="section1">
                    <CostFilter sub_category_id={subcateid}
                    restPerCost={(data) => {setDataPerFilter(data)}}/>
                </div>
                <ListingDisplay listData={restList}/>
            </div>
        

        </>
    )
}

export default Listing;