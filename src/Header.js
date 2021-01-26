import React from "react";
import "./styling/StyleHeader.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
    const [{basket}] = useStateValue();

        return (
            <header className= "header">
                <Link to= "/">
                    <img className="amazon_logo" alt="timer" src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>
                
                <div className= "header_search">
                    <input
                        className = "header_searchIn"
                        type= "text"
                    />
                    <SearchIcon className= "header_searchIcon" />
                </div>
                <div className= "header_nav">
                    <div className = "header_option">
                        <span className= "header_optionOne">Hello Friends</span>
                        <span className= "header_optionTwo">Sign In</span>
                    </div>

                    <div className = "header_option">
                        <span className= "header_optionOne">Returns</span>
                        <span className= "header_optionTwo">To Orders</span>
                    </div>

                    <div className = "header_option">
                        <span className= "header_optionOne">Your</span>
                        <span className= "header_optionTwo">Prime</span>
                    </div>

                    <Link to= "/cart">
                        <div className = "header_optionBasket">
                            <ShoppingCartIcon className = "shopping_basket" />
                            <span className = "header_optionTwo header_basketCount">{basket.length}</span>
                        </div>
                    </Link>
                     
                </div>
            </header>
        )
    }


export default Header;