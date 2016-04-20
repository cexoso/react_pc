import React, {Component} from 'react';
import Count,* as conut from "./countContainer.jsx";

import {combineReducers} from "redux";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>首页</h1>
                <Count />
            </div>
        )
    }
}
export const reducer = combineReducers({
    count: conut.reducer
});
