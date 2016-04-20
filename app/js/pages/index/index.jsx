import React, {Component} from 'react';
import Count,* as conut from "./countContainer.jsx";
import Menu from "components/Menu.jsx";

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
                <div className="nav">
                    <Menu />
                    <Menu />
                    <Menu>
                        <a href="">融智新闻</a>
                        <a href="">行业新闻</a>
                        <a href="">企业新闻</a>
                        <a href="">政策要点</a>
                    </Menu>
                </div>
            </div>
        )
    }
}
export const reducer = combineReducers({
    count: conut.reducer
});
