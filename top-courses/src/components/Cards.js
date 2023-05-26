import React from 'react'
import Card from "./Card";
import {useState} from 'react';
import { toast } from "react-toastify"

const Cards = (props) => {
    let courses = props.courses;
    let category=props.category;
    // function to create sare data ka array
    const [likedCourses,setLikedCourses]=useState([]);


    function getCourses() {
        if(category==="All")
        {let allCourses = [];
        //4 arrays hai data  me object.value se ek array mila jisme 4 array h first foreach to go on all arays dusra 
        // foreach me hr array ke andr ki values 
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;}
        else
        return courses[category];
    }
    return (
        <div className='flex flex-wrap justify-center gap-4  mb-4'>
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses} />
                ))
            }

        </div>
    )
}
export default Cards;