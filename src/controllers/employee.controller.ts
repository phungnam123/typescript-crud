import express from 'express'
import { EmployeModel } from '../models/employee.model'
class EmployeeController {
  getAllEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const employees = await EmployeModel.find({})
      return res.status(200).json({ data: employees })
    } catch (error) {
      return res.status(500).json({
        msg: error,
      })
    }
  }

  getSingleEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params
      const employee = await EmployeModel.findById(id)
      return res.status(200).json({
        data: employee,
      })
    } catch (error) {
      return res.status(500).json({ msg: error })
    }
  }

  createEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const { name, email, mobile, dob } = req.body
      if (!name || !email || !mobile || !dob) {
        return res.status(400).json({ msg: 'Missing required params' })
      }
      const newEmployee = new EmployeModel({ name, email, mobile, dob })
      const data = await newEmployee.save()
      return res.status(200).json({
        msg: 'Employee Created',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  }

  updateEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params
      const { name, email, mobile, dob } = req.body
      if (!name || !email || !mobile || !dob)
        return res.status(400).json('Missing required params')

      const data = await EmployeModel.findByIdAndUpdate(id, {
        name,
        email,
        mobile,
        dob,
      })
      return res.status(200).json({ msg: 'Update successfull', data })
    } catch (error) {
      return res.status(500).json({ msg: error })
    }
  }

  deleteEmployee = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params
      const data = await EmployeModel.findByIdAndDelete(id)
      return res.status(200).json({
        msg: 'Delete successfully',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  }
}

export default new EmployeeController()
