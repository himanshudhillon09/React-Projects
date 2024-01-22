import Card from "../components/Card";
import { useState } from "react";

function CardsContainer(props) {
  let courses = props.courses;
  let category = props.category;
  const [liked, setLiked] = useState([]);

  function allcoursesData() {
    if (category === "All") {
      const allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((CourseData) => {
          allCourses.push(CourseData);
        });
      });

      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {allcoursesData().map((course) => (
        <Card
          key={course.id}
          course={course}
          liked={liked}
          setLiked={setLiked}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
