import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';
import Home from './Home/Home';
import Listing from './listing/listinglogic';
import DetailDisplay from './Details/details';
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder';


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>    
                        <Route path="products/:id" element={<Listing/>}/>  
                        <Route path="details/:pid" element={<DetailDisplay/>}/>
                        <Route path="placeOrder/:pname" element={<PlaceOrder/>}/>
                        <Route path="viewOrder" element={<ViewOrder/>}/>     
                    </Route>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}

export default Routing;