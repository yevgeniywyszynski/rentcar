import { connect } from "react-redux";
import Cars from '../Cars/Cars';
import { nextCarToShow, requestNextCarListToShow, isNextPage, page, setPage} from '../../redux/CarsToShowRedux';
import { searchStateRedux } from '../../redux/SearchRedux';

const mapStateToProps = (state) => ({
    nextCarToShow: nextCarToShow(state),
    isNextPage: isNextPage(state),
    search: searchStateRedux(state), 
    page: page(state)
});

const mapDisptachToProps = dispatch => ({
    requestNextCarListToShow: (page) => dispatch(requestNextCarListToShow(page)),
    setPage: (page) => dispatch(setPage(page))
})

export default connect(mapStateToProps, mapDisptachToProps )(Cars);