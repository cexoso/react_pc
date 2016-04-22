import React, {Component} from 'react';
import Count,* as conut from "./countContainer.jsx";
import Menu from "components/Menu.jsx";
import Carousel from "components/Carousel.jsx";
import Tabs from "components/Tabs.jsx";

import {combineReducers} from "redux";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [
                {
                    src: "../resources/c1.jpg",
                    descript: "剑圣单挑男爵，被波比E到了墙上。"
                },
                {
                    src: "../resources/c2.jpg",
                    descript: "曾经有一段真挚的感情摆在我面前。"
                },
                {
                    src: "../resources/c3.jpg",
                    descript: "贾宝玉大闹天宫，108好汉助阵。"
                },
                {
                    src: "../resources/c4.jpg",
                    descript: "讲文明，树(tree)新(new)风(bee)。"
                }
            ]
        }
    }
    render() {
        const {imgs} = this.state;
        return (
            <div>
                <h1>首页</h1>
                <Count />
                <div className="nav">
                    <Menu content="这是一首简单的小情歌" />
                    <Menu content="这是一首简单的小情歌" />
                    <Menu content="这是一首简单的小情歌">
                        <div className="item">
                            <a href="">融智新闻</a>
                        </div>
                        <div className="item">
                            <a href="">行业新闻</a>
                        </div>
                        <div className="item">
                            <a href="">企业新闻</a>
                        </div>
                        <div className="item">
                            <a href="">政策要点</a>
                        </div>
                    </Menu>
                </div>
                <Carousel imgs={imgs} />
                <div>
                    <Tabs className="tabs" contentClass="tabs_content">
                        <div title="分页1">
                            内容1
                        </div>
                        <div title="分页2">
                            内容2
                        </div>
                        <div title="分页3">
                            内容3
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export const reducer = combineReducers({
    count: conut.reducer
});
