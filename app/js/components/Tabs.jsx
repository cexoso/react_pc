import React, {Component,PropTypes} from 'react';
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }
    onTabClick(current) {
        this.setState({current})
    }
    render() {
        const {children,contentClass} = this.props;
        const {current} = this.state;
        return (
            <div className="component tabs_container">
                <ul className="tabs_point">
                    {children.map((item,key)=>(<li key={key} className={`point ${current === key ? "active" : ""}`}
                        onClick={()=>{this.onTabClick(key)}}
                    >
                            <span className="title">
                                {item.props.title || "默认标题"}
                            </span>
                            <span className="right" />
                            <span className="right_inner" />
                        </li>)
                    )}
                </ul>
                <div className={`content ${contentClass ? contentClass.toString() : ""}`}>
                    {children[current]}
                </div>
            </div>
        )
    }
}
Tabs.propTypes = {
    children: PropTypes.array.isRequired
}

export default Tabs;
