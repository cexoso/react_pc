import React, {Component} from 'react';
import {Link} from "react-router";
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>404 页面走失</h1>
                <Link to="/index">回到首页</Link>
            </div>
        )
    }
}
