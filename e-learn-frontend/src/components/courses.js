import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import image from '../course.png';
import { useNavigate } from "react-router-dom";
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Courses() {
    const navigate = useNavigate();
    const [nocourses, setNocourses] = useState(false);
    useEffect(() => {
        if(localStorage.assignments){
            localStorage.setItem('assignments','[{}]')
        }
        localStorage.setItem('mycourses','[{}]')
        setNocourses(false);
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.get(baseURL+"getenrolledcourses",config)
        .then(function (response) {
            if(response.data.courses.length==0){
                setNocourses(true);
            }
            localStorage.setItem('mycourses',JSON.stringify(response.data.courses))
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);
    const handleClick = (event, id) => {
        navigate("/assignments-student",{state:{id}});
    };
    function Display({id}){
        for(let course of JSON.parse(localStorage.courses)){
            if(course._id==id){
            return(
                <div className='course-card' >
                    <img src={image} className='course-img'></img>
                    <div className='course-name' >{course.name}</div>
                    <div className='description' >Description: {course.description}</div>
                    <button className='view-assignment' key={id} onClick={event => handleClick(event, id)}>View Assignments</button>
                </div>
            )}
        }
    }
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
                    JSON.parse(localStorage.mycourses).map((id) => {
                        return ( <Display id={id}/> )
                    })
                }
                <div>{noCoursesMessage()}</div>
            </div>
        </div>      
    );
}