import {ADD_TO_CART} from '../Constants';
import {REMOVE_TO_CART} from '../Constants';


export const addtocart = (data) =>{
        // console.log(data)
    return {
        type:ADD_TO_CART,
        data:data
    }

}


export const removetocart = () =>{
    console.log('action')
    return {
        type:REMOVE_TO_CART,
    }

}