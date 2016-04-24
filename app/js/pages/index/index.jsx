import React, {Component} from 'react';
import Menu from "components/Menu.jsx";
import Carousel from "components/Carousel.jsx";
import Tabs from "components/Tabs.jsx";
import Panel from "components/Panel.jsx";

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
            <div className="indexPage">
                <div className="banner">
                    <img src="../resources/banner.jpg" />
                </div>
                <div className="nav">
                    <Menu content="首页" />
                    <Menu content="新闻动态" />
                    <Menu content="融智服务" />
                    <Menu content="案例分享">
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
                    <Menu content="在线视频" />
                    <Menu content="专题中心" />
                    <Menu content="资源中心" />
                    <Menu content="关于我们" />
                </div>
                <div className="second_banner">
                    <img src="../resources/banner2.jpg" />
                </div>
                <Carousel imgs={imgs} />
                <div className="new">
                    <div className="title">傅莹谈《慈善法》草案：让捐赠者得到更好保障</div>
                    <div className="content">
                        近日，大会新闻发言人傅莹就《慈善法》草案提请大会审议答记者问。傅莹表示：慈善湖南台份量很重，这是我国家慈善事业建设的第一部基础性的综合性的法律。傅莹指出：对《慈善法》的审议和实施，这个过程非常重要，也希望代表们认真审议，希望通过这个过程尤其是通过这部法律的实施，能够更好地提高社会的慈善意识，让更多的人参与其中，调动全社会的慈善意识。
                    </div>
                    <div className="bottom">
                        <span className="more">
                            <a href="">更多》</a>
                        </span>
                        <div className="detail">
                            融智|CSR观察 总第017期
                        </div>
                    </div>
                </div>
                <div className="section1">
                    <div className="service_left">
                        <Panel title="融智服务" />
                        <div className="item">
                            <div className="title">
                                <span className="major">融智咨询</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所专门设有咨询部，负责开展企业社会责任报告编制、战略规划等相关领域的咨询与服务。
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">
                                <span className="major">融智研究</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所专门设有研究部，负责开展企业社会责任和可持续发展领域的研究、企业责任咨询提供有力支撑。
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">
                                <span className="major">融智培训</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所专门设有培训部，为企业提供社会责任理论与实践方面的培训，为其社会责任能力的提升提供保障。
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">
                                <span className="major">融智传播</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所与联合国开发计划署、环境署、国资委等机构在社会责任领域有着广泛的合作，为社会责任的传播提供支撑。
                            </div>
                        </div>
                    </div>

                    <Tabs className="tabs" contentClass="tabs_content">
                        <div title="行业新闻">
                            <div className="head clearfix">
                                <img src="../resources/c1.jpg" className="img" />
                                <div className="title">
                                    履行企业社会责任不只是做慈善
                                </div>
                                <div className="content">
                                    <span className="content1">
                                        社会责任并不完全不等同于做慈善。国资委专门出台相关规范性意见，明确了央企参与公益慈善要“统筹兼顾、专业科学”。专业科学强调央企合理选择慈善领域、项目和形式，鼓励央企设立慈善组织。
                                    </span>
                                    <span className="more">更多》</span>
                                </div>
                            </div>
                            <div className="body">
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div title="融智新闻">
                            内容2
                        </div>
                        <div title="政策新闻">
                            内容3
                        </div>
                        <div title="融智视角">
                            内容4
                        </div>
                    </Tabs>

                    <div className="service_right">
                        <Panel title="融智服务" />
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third_banner">
                    <img src="../resources/banner2.jpg" />
                </div>
                <div className="section2">
                    <div className="video">
                        <Panel title="在线视频" />
                        <div className="title">
                            装假有视频
                        </div>
                        <div className="mock">

                        </div>
                    </div>
                    <div className="video_list">
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" />
                            </div>
                            <div className="des">
                                为何日本和厄瓜多尔地震多发
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" />
                            </div>
                            <div className="des">
                                为何日本和厄瓜多尔地震多发
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" />
                            </div>
                            <div className="des">
                                为何日本和厄瓜多尔地震多发
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" />
                            </div>
                            <div className="des">
                                为何日本和厄瓜多尔地震多发
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section1">
                    <div className="service_left">
                        <Panel title="融智服务" />
                        <div className="item">
                            <div className="title">
                                <span className="major">融智咨询</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所专门设有咨询部，负责开展企业社会责任报告编制、战略规划等相关领域的咨询与服务。
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">
                                <span className="major">融智研究</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所专门设有研究部，负责开展企业社会责任和可持续发展领域的研究、企业责任咨询提供有力支撑。
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">
                                <span className="major">融智培训</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所专门设有培训部，为企业提供社会责任理论与实践方面的培训，为其社会责任能力的提升提供保障。
                            </div>
                        </div>
                        <div className="item">
                            <div className="title">
                                <span className="major">融智传播</span>
                                <div className="sub">Consultation</div>
                            </div>
                            <div className="content">
                                研究所与联合国开发计划署、环境署、国资委等机构在社会责任领域有着广泛的合作，为社会责任的传播提供支撑。
                            </div>
                        </div>
                    </div>

                    <Tabs className="tabs" contentClass="tabs_content">
                        <div title="行业新闻">
                            <div className="head clearfix">
                                <img src="../resources/c1.jpg" className="img" />
                                <div className="title">
                                    履行企业社会责任不只是做慈善
                                </div>
                                <div className="content">
                                    <span className="content1">
                                        社会责任并不完全不等同于做慈善。国资委专门出台相关规范性意见，明确了央企参与公益慈善要“统筹兼顾、专业科学”。专业科学强调央企合理选择慈善领域、项目和形式，鼓励央企设立慈善组织。
                                    </span>
                                    <span className="more">更多》</span>
                                </div>
                            </div>
                            <div className="body">
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                                <div className="item">
                                    <span className="title">
                                        报告：全国首份系统性农商行社会责任报告发布
                                    </span>
                                    <span className="time">
                                        2016-03-20
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div title="融智新闻">
                            内容2
                        </div>
                        <div title="政策新闻">
                            内容3
                        </div>
                        <div title="融智视角">
                            内容4
                        </div>
                    </Tabs>

                    <div className="service_right">
                        <Panel title="融智服务" />
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src="../resources/c1.jpg" className="img" />
                            </div>
                            <div className="descript">
                                <div className="name">王晓光</div>
                                <div className="sub_item">
                                    <span className="c">在报告中运用社会责任标准</span>
                                    <span className="t">2016-03-20</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">召开责任制造专题研讨会</span>
                                    <span className="t">2016-03-19</span>
                                </div>
                                <div className="sub_item">
                                    <span className="c">你真的明白以编促管吗？</span>
                                    <span className="t">2016-03-18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export const reducer = combineReducers({
});
