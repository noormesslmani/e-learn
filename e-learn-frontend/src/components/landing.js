import React, {useEffect} from 'react';
import '../Student.css'
import axios from 'axios';
import image from '../course.png';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Landing() {
    useEffect(() => {
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.get(baseURL+"viewallcourses",config)
        .then(function (response) {
            localStorage.setItem('courses',JSON.stringify(response.data.data))
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    
    function Display({course}){
        return(
            <div className='course-card'>
                <img src={image} className='course-img'></img>
                <div className='course-name' >{course.name}</div>
                <div className='description' >Description: {course.description}</div>
                <div className='fees'>Fees: {course.fees}$</div>
            </div>
        )
    }

    return (
        <div className='suggested-courses' >
            <h1>Suggested Courses</h1>
            <div className='displayed-courses'>
            {
                JSON.parse(localStorage.getItem('courses')).map((course) => {
                    return (<Display course={course}/>)
                })
            }
            </div>
        </div>      
    );
}