import { connect } from "react-redux";
import FindCar from '../FindCar/FindCar';
import { setSearch } from "../../redux/SearchRedux";

const mapDisptachToProps = dispatch => ({
    setSearch: (value) => dispatch(setSearch(value)),
})

export default connect(null, mapDisptachToProps )(FindCar);