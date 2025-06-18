import PropTypes from "prop-types";
import checkPropTypes from "prop-types/checkPropTypes";

function Student({ name = 'GUEST', age=0, student=false }) {
  checkPropTypes(Student.propTypes, { name, age, student }, "prop", "Student");
  return (
    <ul className="student-box">
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>Student: {student ? "Yes" : "No"}</li>
    </ul>
  );
}

// ✅ Correct syntax
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  student: PropTypes.bool,
};

export default Student;
