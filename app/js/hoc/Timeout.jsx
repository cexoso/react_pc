import React, {Component} from 'react'
function _(C) {
    return class Timeout extends Component {        
        componentWillMount() {
            this.Id = null;
        }
        clear() {
            if (this.Id) {
                window.clearTimeout(this.Id);
            }
        }
        componentWillUnmount() {
            this.clear();
        }
        setTimeout(...o) {
            this.clear();
            const a = window.setTimeout.apply(null, o);
            this.Id = a;
        }
        render() {
            return (
                <C {...this.props} setTimeout={this.setTimeout.bind(this)} clear={this.clear.bind(this)} />
            )
        }
    }
}

export default _;
