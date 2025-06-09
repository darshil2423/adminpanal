const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://darshil:123@cluster0.0g38n.mongodb.net/AdminPanelTask');

const db = mongoose.connection;

db.once('open',(err)=>{
    if(err){
        console.log("Something Is Wrong",err);
        return false;
    }
    console.log("DB Connected successfully");
});

module.exports = db;