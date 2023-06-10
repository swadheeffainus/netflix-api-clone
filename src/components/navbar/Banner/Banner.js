import React, {useEffect} from 'react'
import { API_KEY, baseUrl } from '../../../constants/constants'
import axios from '../../axios'
import './Banner.css'
// import { Axios } from 'axios'

function Banner() {
    useEffect(() => {
         axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
         })
    }, [])
    return(
        <div className='banner'>
             <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
                </div>
                <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</h1>
             </div>
             <div className="fade_button">
                
             </div>
        </div>
    )
}

export default Banner