import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';
import Header from '../Header';

const url = "https://flipkart-pkev.onrender.com/orders";

const ViewOrder = () => {

    const [orders,setOrders] = useState();
    let sessionData = sessionStorage.getItem('userInfo');
    let data = JSON.parse(sessionData)

    useEffect(() => {
        axios.get(`${url}`).then((res) => {setOrders(res.data)})
    })

    return(
        <>
            <Header/>
            <DisplayOrder orderData={orders}/>
        </>

    )

}

export default ViewOrder