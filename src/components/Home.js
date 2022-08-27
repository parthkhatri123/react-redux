import React from "react";
function Home()
{
    return(
        <>
        
        <h2>Home Component</h2>
        <div className="addtocart ">
            <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" />
        </div>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000
                </span>
            </div>
            <div className="btn-wrapper item">
                <button>Add to Cart</button>
            </div>
        </div>
        </>
    )
}
export default Home;