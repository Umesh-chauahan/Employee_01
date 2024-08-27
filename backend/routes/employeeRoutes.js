import express from 'express';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee,getEmployeeById } from '../controllers/employeeController.js';

const router = express.Router();
router.get('/:id', getEmployeeById);
router.get('/', getEmployees);
router.post('/', addEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router; 
