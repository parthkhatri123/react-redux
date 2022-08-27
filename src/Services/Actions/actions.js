import {ADD_TO_CART} from '../Constants';

export const addtocart = (data) =>{
        // console.log(data)
    return {
        type:ADD_TO_CART,
        data:data
    }

}


// export const removetocart = (data) =>{

//     return {
//         type:'REMOVE_TO_CART',
//         data:data
//     }

// }