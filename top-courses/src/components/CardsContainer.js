import Card from "../components/Card";
import { useState } from "react";


function CardsContainer(props) {
  let courses = props.courses;

  const [liked , setLiked] = useState([]);

 

  function allcoursesData() {
    const allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((CourseData) => {
        allCourses.push(CourseData);
      });
    }); 

    return allCourses;
  }


  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {allcoursesData().map((course) => (
        <Card key={course.id} course={course} liked={liked} setLiked={setLiked} />
      ))}
    </div>
  );
}

export default CardsContainer;
