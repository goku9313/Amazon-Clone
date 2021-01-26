import React from "react";
import "./styling/StyleBody.css"
import logo from "./Spring.jpg"
import Product from "./Product"
import blackBook from "./black_book.webp"
import cycle from "./cycle.jpg"
import mask from "./mask.jpg"
import furniture from "./furnisihing.jpg" 

class Body extends React.Component{
    render(){
        return (
            <div className= "home">
                <div className= "home_container">
                    <img src={logo} className="Amazon-pic" alt="logo" />

                
                    <div className= "home_row">
                        <Product 
                            id = {123}
                            title= "Advanced Pattens: Mathematics" 
                            price= {250}
                            img = {blackBook}
                            rating = {5}
                        />
                        <Product 
                            id = {124}
                            title= "Hero Sprint Next 24T 18 Speed Mountain Bike (Ideal For : 9 to 11 Years )"
                            price= {6885.00}
                            img = {cycle}
                            rating = {3.5}
                        />
                        <Product 
                            id = {125}
                            title= "OxiClear N99 Pollution Mask with 4 Activated Carbon Filters, Washable & Reusable, D.R.D.O Certified (BLACK)"
                            price= "399.00"
                            img = {mask}
                            rating = {2}
                        />
                    </div>

                    <div className= "home_row">
                    <Product 
                            id = {211}
                            title= "Advanced Pattens: Mathematics" 
                            price= "250"
                            img = {mask}
                            rating = {3}
                        />
                        <Product 
                            id = {212}
                            title= "Time Dilation"
                            price= "300"
                            img = {mask}
                            rating = {4}
                        />
                        <Product 
                            id = {213}
                            title= "Love of Physics"
                            price= "450"
                            img = {mask}
                            rating = {3}
                        />
                        <Product 
                            id = {214}
                            title= "For The Love of Physics"
                            price= {450}
                            img = {mask}
                            rating = {2}
                        />

                    </div>

                    <div className= "home_row">
                    <Product 
                            id = {301}
                            title= "Amazon Brand - Solimo Microfiber Reversible Comforter, Single (Aqua Blue & Olive Green, 200 GSM)"
                            price= {999.00}
                            img = {furniture}
                            rating = {1}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;