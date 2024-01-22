import React from "react";



function CourseFilter(props) {
    let filterData = props.courseData;
    let setCategory = props.setCategory;
    let category = props.category;


function filterHandler(data){
    setCategory(data.title);
}

    return (
        <div className="w-11/12 mx-auto flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 justify-center">
            {filterData.map((data)=>
           
            <button key={data.id} onClick={()=>filterHandler(data)} className={`
            text-lg px-2 py-1 rounded-md bg-black border-2 bg-opacity-60 hover:bg-opacity-50 text-white transition-all duration-300 font-medium
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }`} > {data.title} </button>

           )
            }
        </div>
    )
;
  
  
    }

export default CourseFilter;
