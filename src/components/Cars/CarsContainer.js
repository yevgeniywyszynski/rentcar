import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { getAllFutureCars } from "../../redux/CarsRedux";

const mapStateToProps = (state) => ({
    allCars: getAllFutureCars(state),
})

export default connect(mapStateToProps, null )(Cars);