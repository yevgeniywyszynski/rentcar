import { connect } from "react-redux";
import MemberComent from '../MemberComent/MemberComent';
import { getMembers } from "../../redux/MemberComentRedux";

const mapStateToProps = (state) => ({
    members: getMembers(state),
})

export default connect(mapStateToProps, null )(MemberComent);