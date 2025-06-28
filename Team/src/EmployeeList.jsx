import React from 'react';
import './EmployeeList.css';

function EmployeeList({ employees, deleteEmployee, setEditingEmployee }) {
  return (
    <table className="employee-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Job Title</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.jobTitle}</td>
            <td>{employee.email}</td>
            <td>
              <button onClick={() => setEditingEmployee(employee)}>Edit</button>
              <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
