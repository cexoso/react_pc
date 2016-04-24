import React,{Component} from "react";

import {combineReducers} from "redux";
import indexrc from "./index/router.jsx";
import f04rc from "./404/router.jsx";
class container extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="container">
            {this.props.children}
        </div>)
    }
}
const rootRoute = {
  component: container,
  childRoutes: [
      indexrc,
      f04rc
  ]
}

export const reducer = combineReducers({
    index: indexrc.reducer,
    f04: f04rc.reducer
});
export default rootRoute;
