import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { getAllCurrentCars } from "../../redux/CarsRedux";
import { getCarsToShow, loadCarsToShow } from '../../redux/CarsToShowRedux';

const mapStateToProps = (state) => ({
    allCars: (page) => getAllCurrentCars(state,page),
    downloadedCarsToShow: getCarsToShow(state),
});

const mapDisptachToProps = dispatch => ({
    loadCars: () => dispatch(loadCarsToShow()),
})

export default connect(mapStateToProps, mapDisptachToProps )(Cars);