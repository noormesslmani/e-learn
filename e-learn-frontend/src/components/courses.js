import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import image from '../course.png';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Courses() {
    const [nocourses, setNocourses] = useState(false);
    useEffect(() => {
        setNocourses(false);
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.get(baseURL+"getenrolledcourses",config)
        .then(function (response) {
            console.log(response.data)
            if(response.data.courses.length==0){
                setNocourses(true);
            }
            localStorage.setItem('mycourses',JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    const handleClick = (e) => {
        console.log('clicked')
    };
    function Display({id}){
        for(let course of JSON.parse(localStorage.courses)){
            if(course._id==id){
            return(
                <div className='course-card' >
                    <img src={image} className='course-img'></img>
                    <div className='course-name' >{course.name}</div>
                    <div className='description' >Description: {course.description}</div>
                    <button className='view-assignment' key={id} onClick={handleClick} >View Assignments</button>
                </div>
            )}
        }
    }
    console.log(localStorage)
    const noCoursesMessage = () => {
        return (
          <h2 className="messsage" style={{display: nocourses ? 'block' : 'none',}}>
            No courses to display :(
          </h2>
        );
    };
    return (
        <div className='suggested-courses' >
            <h1>Your Courses</h1>
            <div className='displayed-courses'>
                {
                    JSON.parse(localStorage.mycourses).courses.map((id) => {
                        return ( <Display id={id}/> )
                    })
                }
                <div>{noCoursesMessage()}</div>
            </div>
        </div>      
    );
}