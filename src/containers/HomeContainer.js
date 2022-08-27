import Home from "../components/Home";
import {connect} from 'react-redux';
import  {addtocart ,removetocart} from '../Services/Actions/actions';


const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addtocartHandler:data=>dispatch(addtocart(data)),
    removetocartHandler:data=>dispatch(removetocart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


//export default Home;