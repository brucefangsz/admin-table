import { Link } from 'react-router';
import './index.css';
let h = (document.body.clientHeight - 50)+'px';
const Def = function () {
    return (
            <div className="sky" style={{height:h}}>
                <div className="text">iuapDemo</div>
                <div className="clouds_one"></div>
                <div className="clouds_two"></div>
                <div className="clouds_three"></div>
            </div>
    )
}
export default Def;