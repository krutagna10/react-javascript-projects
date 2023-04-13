import React, { useState } from "react";
import data from "./data";

const StudentList = ({ students }) => {
  return (
    <table style={{ minWidth: "35rem" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4">No such students present</td>
          </tr>
        ) : (
          <React.Fragment>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

const SearchFilter = () => {
  const [students, setStudents] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        style={{ width: "100%" }}
        type="text"
        placeholder="Search"
        onChange={handleSearchTermChange}
      />
      <StudentList
        students={students.filter((student) =>
          student.name.toLowerCase().includes(searchTerm)
        )}
      />
    </div>
  );
};

export default SearchFilter;
