import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import EnrolledCourseCard from './enrolledCourseCard';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function Courses() {
    let config = {headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},};
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios.get(`${baseURL}get-enrolled-courses`,config)
        .then(function (response) {
            setCourses(response.data.courses)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);   

    const noCoursesMessage = () => {
        return (
          <h2 className="messsage" >
            No courses to display :(
          </h2>
        );
    };
    return (
        <div className='suggested-courses' >
            <h1>Your Courses</h1>
            <div className='displayed-courses'>
                {
                    courses.length>0? (
                    <div className='displayed-courses'>
                    {courses.map((id)=><EnrolledCourseCard id={id} />)} 
                    </div>): <div>{noCoursesMessage()}</div>
                }
            </div>
        </div>      
    );
}