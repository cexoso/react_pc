import React, {Component,PropTypes} from 'react';
class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {title} = this.props;
        return (
            <div className="component panel">
                {title}
            </div>
        )
    }
}
Panel.propTypes = {
    title: PropTypes.string.isRequired
}
export default Panel;
