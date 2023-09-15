import {NavLink} from 'react-router-dom';
import style from  './Landing.module.css';

const Landing=()=>{
    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>Countries of the World</h1>
                <NavLink to='/home'>
                <button className={style.button}>LOG IN</button>

                </NavLink>
            </div>
        </div>
    )
}
export default Landing;