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
            if(response.data.courses.length==0){
                setNocourses(true);
            }
            localStorage.setItem('mycourses',JSON.stringify(response.data))
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    function Display({id}){
        return(
            <div className='course-card'>
                <img src={image} className='course-img'></img>
            </div>
        )
    }
    console.log(JSON.parse(localStorage.mycourses).courses)
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