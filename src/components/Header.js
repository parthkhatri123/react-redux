import React from "react";
function Header(props)
{
    console.warn(props.data)
    return(
        <>
        <div className="addtocart ">
            <span className="cartspan">{props.data.length}</span>
            <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" />
        </div>
        
        </>
    )
}
export default Header;