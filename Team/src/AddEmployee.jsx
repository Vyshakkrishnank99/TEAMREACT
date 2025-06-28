import React, { useState } from 'react';
import './AddEmployee.css';

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { id: Date.now(), name, jobTitle, email };
    addEmployee(newEmployee);
    setName('');
    setJobTitle('');
    setEmail('');
  };

  return (
    <form className="add-employee-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Job Title" 
        value={jobTitle} 
        onChange={(e) => setJobTitle(e.target.value)} 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
