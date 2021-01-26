import React from "react";
import "./styling/Checkout.css"
import adImage from "./amazon_ad.jpg"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
    const [{ basket }] = useStateValue();

        return (
            <div className= "checkout">
                <div className= "checkout_left">
                    <img className="checkout_ad" src= {adImage} alt= "" />
                    <div>
                        <h2 className= "checkout_title">Your Shopping Basket</h2>
                        <div className= "checkout_items">
                            {basket.map(item => (
                                <CheckoutProduct 
                                    id = {item.id}
                                    title= {item.title}
                                    price= {item.price}
                                    img = {item.img}
                                    rating = {item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>

                <div className= "checkout_right">
                    <Subtotal />
                    
                </div>
            </div>
        )
}

export default Checkout;