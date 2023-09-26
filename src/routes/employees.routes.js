import {Router} from 'express'
import {getEmployees, createEmployees, updateEmployees, deleteEmployeeById, getEmployeeById} from '../controllers/employees.controlles.js'

const router = Router()

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployeeById)

router.post('/employees', createEmployees)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployeeById)

export default router