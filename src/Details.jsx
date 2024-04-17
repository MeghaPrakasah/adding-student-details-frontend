import React, { useState } from 'react';
import './Details.css'

function Details() {
    const [students, setStudents] = useState([{ name: '', id: '', phone: '' }]);

    const addStudent = () => {
        setStudents([...students, { name: '', id: '', phone: '' }]);
    };

    const removeStudent = (index) => {
        const updatedStudents = [...students];
        updatedStudents.splice(index, 1);
        setStudents(updatedStudents);
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedStudents = [...students];
        updatedStudents[index][name] = value;
        setStudents(updatedStudents);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const phones = new Set();
        let isValid = true;
        students.forEach((student) => {
            if (phones.has(student.phone)) {
                isValid = false;
                alert('Phone numbers must be unique!');
                return;
            }
            phones.add(student.phone);
        });
        if (isValid) {
            // Here you can perform further actions, like sending the data to a server
            console.log(students);
        }
    };

    return (
        <div className="container">
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                {students.map((student, index) => (
                    <div key={index} className="student-row">
                        <input

                            type="text"
                            name="name"
                            placeholder="Student Name"
                            value={student.name}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <input
                            type="text"
                            name="id"
                            placeholder="Student ID"
                            value={student.id}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={student.phone}
                            onChange={(e) => handleInputChange(index, e)}
                            required
                        />
                        {index === students.length - 1 && (
                            <>
                                <button type="button" onClick={addStudent}>+</button>
                                <button type="button" onClick={() => removeStudent(index)}>-</button>
                            </>
                        )}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Details;
