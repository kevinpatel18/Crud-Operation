const User = require('../models/userModel');

//Get All The User
const index = (req, res) => {
    console.log("asdsd");
    User.find()
    .then(user =>{
        res.json({
            data:user
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!', error
        })
    })
}

// Get a single user by id 
const show = (req, res) => {
    User.findById(req.params.id)
    .then(user =>{
        res.json({
            data:user
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!', error
        })
    })
}


// Add the user
const add = (req, res) => {
    // console.log(req.body);
    let user = new User({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
        })

        console.log(req.files);
        if(req.files){
            user.avatar = req.files.path;
        }


        user.save()
    .then(user =>{
        res.json({
            message: 'User Added Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!', error
        })
    })
}




// update a user by id 
const update = (req, res) => {

    let userId = req.params.id

    let updateData = ({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
        })

    User.findByIdAndUpdate(userId, {$set: updateData})
    .then(user =>{
        res.json({
            message: 'Data Updated Successfully!'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!', error
        })
    })
}


// delete a user by ID
const destory = (req, res) => {
    User.findOneAndRemove(req.params.id)
    .then(user =>{
        res.json({
            message: 'User Deleted Successfully '
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!', error
        })
    })
}

module.exports = {
    index,show,add,update,destory
};