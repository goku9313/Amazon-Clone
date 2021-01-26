import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import "./styling/CheckoutProduct.css"
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({id , img , title , rating , price}) => {
    const [{ basket } , dispatch] = useStateValue();
    console.log(basket);
    
    const RemoveElement = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className= "CheckoutProduct">
            <img className= "ProductImage" src= {img} alt= "" />
            <div className= "CheckoutProduct_Info">
                <p className= "ProductInfo">{title}</p>
                <p className= "ProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className= "ProductRating">
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={rating}
                    />
                </p>
                <button onClick= {RemoveElement} className= "RemoveFromBasket">Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;