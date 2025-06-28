import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    if (storedEmployees.length > 0) {
      setEmployees(storedEmployees); // Only set if employees are present
    }
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    toast.success('Employee added successfully!');
  };

  const deleteEmployee = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this employee?');
    if (isConfirmed) {
      const updatedEmployees = employees.filter(emp => emp.id !== id);
      
      if (updatedEmployees.length === 0) {
        localStorage.setItem('employees', JSON.stringify([])); 
      } else {
        localStorage.setItem('employees', JSON.stringify(updatedEmployees)); 
      }
      
      setEmployees(updatedEmployees);
      toast.success('Employee deleted successfully!');
    } else {
      toast.info('Employee deletion cancelled.');
    }
  };
  

  const editEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === id ? updatedEmployee : emp));
    toast.success('Employee updated successfully!');
    setEditingEmployee(null);
  };

  const closeEditModal = () => {
    setEditingEmployee(null);
  };

  const filteredEmployees = employees.filter(emp => emp.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="App">
  <div className="header-container">
    <img 
      src="https://th.bing.com/th/id/OIP.rcmXeqCUOiCg54dfU4v9tgHaHa?rs=1&pid=ImgDetMain" 
      alt="Logo" 
      className="header-image" 
    />
    <h1>User Manager</h1>
    <input 
      type="text" 
      className="search-box" 
      placeholder="Search by name" 
      value={filter} 
      onChange={(e) => setFilter(e.target.value)} 
    />
  </div>

  <AddEmployee addEmployee={addEmployee} />

  {filteredEmployees.length > 0 ? (
    <EmployeeList 
      employees={filteredEmployees} 
      deleteEmployee={deleteEmployee} 
      setEditingEmployee={setEditingEmployee}
    />
  ) : (
    <p>No employees found.</p>
  )}

  {editingEmployee && (
    <EditEmployee 
      employee={editingEmployee} 
      editEmployee={editEmployee} 
      closeEditModal={closeEditModal}
    />
  )}

  <ToastContainer />
</div>

  );
}

export default App;
