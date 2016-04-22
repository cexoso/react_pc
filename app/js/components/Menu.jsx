import React, {Component,PropTypes} from 'react';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }
    onMouseEnter() {
        this.setState({
            showMenu: true
        })
    }
    onMouseLeave() {
        this.setState({
            showMenu: false
        })
    }
    render() {
        const {content} = this.props;
        const {showMenu} = this.state;
        return (
            <div className={`component menu menu_container ${this.props.children && showMenu ? "showing" : ""}`}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                <span className="content">{content}</span>
                <span className="after" />
                {this.props.children && <div className="children_container" style={{
                    display: showMenu ? "block" : "none"
                }}
                >
                    <div className="children">
                        <span className="horn">
                        </span>
                        {this.props.children}
                    </div>
                </div>}
            </div>
        )
    }
}
Menu.propTypes = {
    content: PropTypes.string.isRequired
}
export default Menu;
