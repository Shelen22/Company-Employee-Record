const {app, start} = require('./server');

const employeecontroller = require("./controllers/employees.controllers");

 app.use("/" ,employeecontroller);

start();