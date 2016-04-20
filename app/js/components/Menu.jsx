import React, {Component,PropTypes} from 'react';
class Menu extends Component {
    add() {
    }
    render() {
        return (
            <div className="component menu menu_container">
                <span className="content">123123</span>
                <span className="after"></span>
                <div className="children">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
Menu.propTypes = {
    seconds: PropTypes.number,
    change: PropTypes.func
}
export default Menu;
