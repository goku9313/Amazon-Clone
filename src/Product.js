import React from "react";
import "./styling/Product.css";
import StarRatingComponent from 'react-star-rating-component';
import { useStateValue } from "./StateProvider";

const Product = ({id , title , price , img , rating}) => {
    const [{ basket } , dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                img: img
            },
        });
    };

    return (
        <div className="product">
                
            <div className= "product_info">
                <p>{title}</p>
                <p className= "product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={rating}
                    />
                </div>

                <img className= "product_image" src= {img} alt= "" />
                <button onClick= {addToBasket}>Add to Basket</button>
            </div>
        )
}

export default Product;