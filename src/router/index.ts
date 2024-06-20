import express from 'express'
import employeeController from '../controllers/employee.controller'
const router = express.Router()

router.get('/', employeeController.getAllEmployee)
router.get('/:id', employeeController.getSingleEmployee)
router.post('/', employeeController.createEmployee)
router.patch('/:id', employeeController.updateEmployee)
router.delete('/:id', employeeController.deleteEmployee)

export default router
