import React, {Component,PropTypes} from 'react';
class Count extends Component {
    add() {
        const {change} = this.props;
        change(1)
    }
    sub() {
        const {change} = this.props;
        change(-1)
    }
    render() {
        const {seconds} = this.props;
        const s = {
            width: "100px",
            height: "100px"
        }
        return (
            <div>
                <h1>计数器</h1>
                <h1>{seconds}</h1>
                <div>
                    <button onClick={this.add.bind(this)} style={s}>
                        +
                    </button>
                    <button onClick={this.sub.bind(this)} style={s}>
                        -
                    </button>
                </div>
            </div>
        )
    }
}
Count.propTypes = {
    seconds: PropTypes.number,
    change: PropTypes.func
}
export default Count;
