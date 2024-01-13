const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstName: {required: true, type: 'string'},
    lastName: {required: true, type: 'string'},
    email: {required: true, type: 'string'},
    phone: {required: true, type: 'string'},
    gender: {required: true, type: 'string'},
    nationalId: {required: true, type: 'string'},
    role: {
        enum:{
            values: ["HR", "MANAGER"," IT_ADMIN", "EMPLOYEE"],
            message: "{value} is not a valid role"
        }
        },
        createDate: {required: true, type: 'date', default: new Date()},
        updateTime: {required: true, type: 'Date'}
});
module.exports = mongoose.model('employee', EmployeeSchema);