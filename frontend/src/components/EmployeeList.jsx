import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      alert('Employee deleted successfully!');
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/employees/edit/${id}`);
  };

  const handleNewEmployee = () => {
    navigate('/employees/new');
  };

  return (
    <div className='title'>
      <h1 className='dashboard'>Employee List</h1>
      <button className='add' onClick={handleNewEmployee}>Add New Employee</button>
      <div className="table">
      {employees.map((employee) => (
      <table>
        <thead>
            <tr>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>Name:</strong> {employee.name}<br/>
                    <strong>Department:</strong>{employee.department} <br/>
                    <strong>Position:</strong>{employee.position} <br/>
                    <strong>Salary:</strong>{employee.salary} <br/>
                    <button className='button' onClick={() => handleEdit(employee._id)}>Edit</button>
                    <button className='button' onClick={() => handleDelete(employee._id)}>Delete</button> 
                </td>
            </tr>
            </tbody>
      </table>   
      ))}  
      </div>   
    </div>
  );
};

export default EmployeeList;
