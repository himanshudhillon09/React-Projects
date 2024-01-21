import Card from "../components/Card";

function CardsContainer(props) {
  let courses = props.courses;

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
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CardsContainer;
