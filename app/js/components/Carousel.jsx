import React, {Component,PropTypes} from 'react';
import timeout from "../hoc/Timeout.jsx";
const INT = 3000;//轮播间隔
class Carousel extends Component {
    constructor(props) {
        super(props);
        const {imgs} = props;
        this.state = this.init(imgs)
    }
    init(imgs) {
        return {
            current: 0,
            length: imgs.length
        }
    }
    componentWillReceiveProps(props) {
        const {imgs} = props;
        if (imgs) {
            this.setState(this.init(imgs));
        }
    }
    componentDidMount() {
        const {setTimeout} = this.props;
        setTimeout(()=>{
            this.next();
        },INT)
    }
    next() {
        const {current,length} = this.state;
        const {setTimeout} = this.props;
        this.setState({
            current: (current + 1) % length
        });
        setTimeout(()=>{
            this.next();
        },INT)
    }
    onMouseEnter() {
        const {clear} = this.props;
        clear();
    }
    onMouseLeave() {
        const {setTimeout} = this.props;
        setTimeout(()=>{
            this.next();
        },INT / 2);
    }
    pointOnClick(current) {
        this.setState({current});
    }
    render() {
        const {imgs} = this.props;
        const {current} = this.state;

        const style = {
            ul: {
                transform: `translate(-${current * 100}%,0)`,
                msTransform: `translate(-${current * 100}%,0)`
            }
        }
        return (
            <div className="component carousel_container"
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                <ul className="ul" style={style.ul}>
                    {imgs.map((item,key)=>(<li key={key} className="li">
                        <img src={item.src} />
                    </li>))}
                </ul>
                <div className="bottom">
                    <span className="descript">
                        {imgs[current].descript}
                    </span>
                    <ul className="point">
                        {imgs.map((item,key)=>(<li key={key} className={`${key === current ? "active" : ""}`} onClick={()=>{this.pointOnClick(key)}} />))}
                    </ul>
                </div>
            </div>
        )
    }
}
Carousel.propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default timeout(Carousel);
