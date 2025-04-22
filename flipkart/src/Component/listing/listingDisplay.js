import React from 'react';
import {Link} from 'react-router-dom';


const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                            <Link to={`/details/${item.pid}`}>
                            <div key={item._id}>
                                <img src={item.image} key={item._id} alt={item.category_id}></img>
                                <h3 key={item._id}>{item.pname}</h3>
                                <h3 key={item._id}>&#8377;{item.price}</h3>
                            </div>
                            </Link>
                        
                    )
                })
            }else{
                return(
                    <h2>No Data Found</h2>
                )
            }
        }else{
            return(
                <>  
                    <span className='loading'>
                        <h2>Loading</h2>
                        <img src="https://i.ibb.co/5vn00WK/296-2961253-loading-red-icon-png-transparent-png.png" alt="loader"/>
                    </span>
                </>
            )
        }
    }

    return(
        
        <div className="section2">
            {renderData(props)}
        </div>

        
    )
}

export default ListingDisplay;