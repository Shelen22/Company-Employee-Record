const mongoose = require('mongoose');

module.exports = () =>{
    return mongoose.connect(`mongodb+srv://employeerecords:shailendra_22@cluster0.djbfv.mongodb.net/employees`)
}