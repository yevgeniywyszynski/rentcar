import { connect } from "react-redux";
import BookingCar from '../BookingCar/BookingCar';
import { allCars, requestGetAllCars } from '../../redux/CarsToShowRedux';

const mapStateToProps = (state) => ({
    cars: allCars(state),
})
const mapDisptachToProps = dispatch => ({
    getAllCars: () => dispatch(requestGetAllCars()),
})
export default connect(mapStateToProps, mapDisptachToProps )(BookingCar);