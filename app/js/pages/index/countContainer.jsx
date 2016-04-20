import count from "components/App.jsx"
import {connect} from "react-redux";

const COUNT_CHANGE_INDEX = "COUNT_CHANGE_INDEX";

function mapStateToProps(state) {
    return {
        seconds: state.index.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        change: (value)=>{
            dispatch({type: COUNT_CHANGE_INDEX,value})
        }
    }
}
export function reducer(state = 0,action) {
    switch (action.type) {
        case COUNT_CHANGE_INDEX:
            return state + action.value;
        default:
            return state;
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(count)
