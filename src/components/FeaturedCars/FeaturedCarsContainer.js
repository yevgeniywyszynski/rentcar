import { connect } from "react-redux";
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import { getAllFutureCars } from "../../redux/CarsRedux";

const mapStateToProps = (state) => ({
    allFutureCars: getAllFutureCars(state),
})

export default connect(mapStateToProps, null )(FeaturedCars);