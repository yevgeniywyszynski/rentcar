import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { getAllCurrentCars } from "../../redux/CarsRedux";

const mapStateToProps = (state) => ({
    allCars: (page) => getAllCurrentCars(state,page),
})

export default connect(mapStateToProps, null )(Cars);