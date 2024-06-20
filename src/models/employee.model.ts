import mongoose from 'mongoose' // Erase if already required

// Declare the Schema of the Mongo model
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
})

//Export the model
export const EmployeModel = mongoose.model('Employee', employeeSchema)
