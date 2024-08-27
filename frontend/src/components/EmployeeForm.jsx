import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
  const { id } = useParams(); 
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [salary,setSalary]=useState('');
  const navigate = useNavigate();

 
  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
          const { name, position, department ,salary} = response.data;
          setName(name);
          setPosition(position);
          setDepartment(department);
          setSalary(salary)
        } catch (error) {
          console.error('Error fetching employee details:', error);
        }
      };

      fetchEmployee();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { name, position, department ,salary};

    try {
      if (id) {
        // Update existing employee
        await axios.put(`http://localhost:5000/api/employees/${id}`, employeeData);
        alert('Employee updated successfully!');
      } else {
        // Add new employee
        await axios.post('http://localhost:5000/api/employees', employeeData);
        alert('Employee added successfully!');
      }
      navigate('/employees');
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name :</label>
        <input
          className='name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Position :</label>
        <input
        className='position'
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Department :</label>
        <input
          className='department'
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Salary :</label>
        <input
          className='name'
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
      </div>
      <button type="submit">{id ? 'Update Employee' : 'Add Employee'}</button>
    </form>
  );
};

export default EmployeeForm;
