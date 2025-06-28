import React, { useState } from 'react';
import './EditEmployee.css';

function EditEmployee({ employee, editEmployee, closeEditModal }) {
  const [jobTitle, setJobTitle] = useState(employee.jobTitle);
  const [email, setEmail] = useState(employee.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...employee, jobTitle, email };
    editEmployee(employee.id, updatedEmployee);
  };

  return (
    <div className="edit-employee-modal">
      <form onSubmit={handleSubmit}>
        <h2>Edit Employee</h2>
        <input 
          type="text" 
          value={employee.name} 
          readOnly
          className="input-readonly"
        />
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          required
          placeholder="Job Title"
        />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          placeholder="Email"
        />
        <div className="button-group">
          <button type="button" onClick={closeEditModal}>Cancel</button>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
