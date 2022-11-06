import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { getAllCars } from "../../redux/CarsRedux";

const mapStateToProps = (state) => ({
    allCars: getAllCars(state)
})

export default connect(mapStateToProps, null )(Cars);