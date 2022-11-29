import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { nextCarToShow, requestNextCarListToShow } from '../../redux/CarsToShowRedux';

const mapStateToProps = (state) => ({
    nextCarToShow: nextCarToShow(state),
});

const mapDisptachToProps = dispatch => ({
    requestNextCarListToShow: (page) => dispatch(requestNextCarListToShow(page)),
})

export default connect(mapStateToProps, mapDisptachToProps )(Cars);