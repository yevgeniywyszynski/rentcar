import { connect } from "react-redux";
import BookingCar from '../BookingCar/BookingCar';
import { getAllCurrentCars } from "../../redux/CarsRedux";

const mapStateToProps = (state) => ({
    cars: getAllCurrentCars(state),
})

export default connect(mapStateToProps, null )(BookingCar);