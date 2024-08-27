import Employee  from '../models/Employee.js';


export const getEmployees = async (req, res) => {
   
    const employees = await Employee.find();
    res.json(employees);
  };
  
  export const addEmployee = async (req, res) => {
    
    const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.json(newEmployee);
  };
  
  export const updateEmployee = async (req, res) => {
    
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEmployee);
  };
  
  export const deleteEmployee = async (req, res) => {
    
    await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
  };
  export const getEmployeeById = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };