import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { getAllCurrentCars } from "../../redux/CarsRedux";
import { getCarsToShow, requestCarsToShow } from '../../redux/CarsToShowRedux';

const mapStateToProps = (state) => ({
    allCars: (page) => getAllCurrentCars(state,page),
    downloadedCarsToShow: getCarsToShow(state),
});

const mapDisptachToProps = dispatch => ({
    requestCarsToShow: (page) => dispatch(requestCarsToShow(page)),
})

export default connect(mapStateToProps, mapDisptachToProps )(Cars);