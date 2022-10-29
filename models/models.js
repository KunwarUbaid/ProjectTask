const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_name: {
        required: true,
        type: String
    },
    student_rollno: {
        required: true,
        type: Number
    },
    fav_teacher:{
        required:true,
        type: String
    }
})

module.exports = mongoose.model('Data', studentSchema)