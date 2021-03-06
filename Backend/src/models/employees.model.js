const mongoose = require('mongoose'); 

const employeeSchema = new mongoose.Schema({
         username : {type:String, required:true,unique:true},
         name: {type:String, required:true},
         password: {type:String, required:true},
         department: {type:String, required:true},
         gender : {type:String, default:"Male"},
         joiningDate : {type:String, required:true},
         profile: {type:String, required:true},
         payment :[{
              month : {type:String, required:true},
              year: {type:String, required:true},
              salary : {type:String, required:true}
         }]
},
{
     versionKey:false,
      timestamps:true
})

module.exports = mongoose.model("employee" , employeeSchema)


        // {
    // "users": [
    //     {
    //       "id": 1,
    //       "user_id": "1",
    //       "username": "aman",
    //       "username_fullname": "Aman Anku",
    //       "password": "aman",
    //       "avatar_url": "https://avatars3.githubusercontent.com/u/16429474?s=460&u=b5939cec9740ee155f7a997d2f070a9170879a96&v=4",
    //       "description": "Employee 1",
    //       "department": "Software Engineer",
    //       "joiningDate": "2020-12-11",
    //       "gender": "Male",
    //       "payment": [
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         }
    //       ]
    //     },
    //     {
    //       "id": 2,
    //       "user_id": "2",
    //       "username": "rahul",
    //       "username_fullname": "Rahul Singh",
    //       "password": "rahul",
    //       "avatar_url": "https://cdn.pixabay.com/photo/2016/03/09/15/10/man-1246508__340.jpg",
    //       "description": "Employee 2",
    //       "department": "System Engineer",
    //       "joiningDate": "12/55/30",
    //       "gender": "male",
    //       "payment": [
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         },
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         },
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         }
    //       ]
    //     },
    //     {
    //       "id": 3,
    //       "user_id": "3",
    //       "username": "charlie",
    //       "username_fullname": "Charlie Hebdo",
    //       "password": "charlie",
    //       "avatar_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fran%C3%A7ois_Cavanna.jpg/300px-Fran%C3%A7ois_Cavanna.jpg",
    //       "description": "Employee 3",
    //       "department": "Software Engineer",
    //       "joiningDate": "12/55/30",
    //       "gender": "male",
    //       "payment": [
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         }
    //       ]
    //     },
    //     {
    //       "id": 4,
    //       "user_id": "4",
    //       "username": "erdo",
    //       "username_fullname": "Erdogan",
    //       "password": "erdo",
    //       "avatar_url": "https://cdn.pixabay.com/photo/2016/11/16/19/27/brad-pitt-1829794__340.jpg",
    //       "description": "Employee 4",
    //       "department": "Software Engineer",
    //       "joiningDate": "12/55/30",
    //       "gender": "male",
    //       "payment": [
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         }
    //       ]
    //     },
    //     {
    //       "id": 5,
    //       "user_id": "5",
    //       "username": "neha",
    //       "username_fullname": "Neha Singh",
    //       "password": "neha",
    //       "avatar_url": "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //       "description": "Employee 5",
    //       "department": "System Engineer",
    //       "joiningDate": "2020-12-19",
    //       "gender": "female",
    //       "payment": [
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         }
    //       ]
    //     },
    //     {
    //       "id": 6,
    //       "user_id": "6",
    //       "username": "richa",
    //       "username_fullname": "Richa Gupta",
    //       "password": "richa",
    //       "avatar_url": "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //       "description": "Employee 6",
    //       "department": "Full Stack Developer",
    //       "joiningDate": "2020-12-19",
    //       "gender": "female",
    //       "payment": [
    //         {
    //           "month": "12",
    //           "year": "2020",
    //           "amount": 50000
    //         }
    //       ]
    //     }
    //   ]
    // }