import React, {useEffect, useState} from 'react';
import '../Student.css'
import axios from 'axios';
import image from '../course.png';
import { useLocation } from 'react-router-dom';
const baseURL='http://127.0.0.1:8000/api/v1/';

export default function AssignmentList() {
    const { state } = useLocation();
    const [noassignments, setassignments] = useState(false);
    console.log(state.id)
    useEffect(() => {
        localStorage.setItem('assignments','[{}]')
        setassignments(false);
        let payload = {course_id: state.id};
        let config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        };
        let res = axios.post(baseURL+"getstudentassignments",payload,config)
        .then(function (response) {
            console.log(response.data.data)
            localStorage.setItem('assignments',JSON.stringify(response.data.data))
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    function Display({assignment}){
        console.log(assignment)
        for(let course of JSON.parse(localStorage.courses)){
            if(course._id==assignment.course_id){
            return(
                <div className='course-card' >
                    <div className='course-name' >{course.name}</div>
                    <div className='assignment-description'><span className='requirements'>Requirements:</span> {assignment.description}</div>

                </div> )}
        }
    }
    
    // console.log(localStorage)
    // const noCoursesMessage = () => {
    //     return (
    //       <h2 className="messsage" style={{display: nocourses ? 'block' : 'none',}}>
    //         No courses to display :(
    //       </h2>
    //     );
    // };
    return (
        <div className='suggested-courses' >
            <h1>Assignments</h1>
            <div className='displayed-courses'>
                {
                    JSON.parse(localStorage.assignments).map((assignment) => {
                        return ( <Display assignment={assignment}/> )
                    })
                }
                {/* <div>{noCoursesMessage()}</div> */}
            </div>
        </div>      
    );
}