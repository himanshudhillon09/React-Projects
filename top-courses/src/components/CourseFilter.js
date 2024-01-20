import React from "react";



function CourseFilter(props) {
    let filterData = props.courseData;
    return (
        <div className="">
            {filterData.map((data)=>
           
            <button key={data.id} > {data.title} </button>

           )
            }
        </div>
    )
;
  
  
    }

export default CourseFilter;
