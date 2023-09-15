import { useState } from "react";
import {getCountryByName}from '../Redux/actions';
import  style from './SearchBar.module.css';
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom';

const SearchBar=()=>{

    const dispatch=useDispatch();
    const [name,setname]=useState('');

    const handleChange=(event)=>{
        setname(event.target.value);
    }
    const handleSearch=()=>{
        dispatch(getCountryByName(name))
        setname('');
    }
    return(
        <div className={style.container}>
            <input placeholder="SEARCH COUNTRY" className={style.buttonInput} type="SEARCH" onChange={handleChange} value={name} />
            <NavLink to={'/home'}>
                <button className={style.button} onClick={handleSearch}>SEARCH</button>
            </NavLink>

        
        </div>
    )


}
export default SearchBar;