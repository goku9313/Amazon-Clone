import React from "react";
import "./styling/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
    const [{ basket }] = useStateValue();
    var totalPrice = 0;

    for(var i = 0 ; i<basket.length ; i++){
        totalPrice += Number(basket[i].price);
    }

        return (
            <div className= "subtotal">
                <CurrencyFormat 
                renderText = {(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className= "subtotal_gift">
                        <input type= "checkbox" />This order contains a Gift
                    </small>
                    </>
                )}
                    decimalScale= {2}
                    value= {totalPrice}
                    displayType= {"text"}
                    thousandSeperator = {true}
                    prefix= {"$"}
                />
                <button className= "submit_button">
                    Proceed to checkout
                </button>
            </div>
            )
}

export default Subtotal;