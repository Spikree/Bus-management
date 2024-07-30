import express from 'express'
import User from '../userSchema/user.js';

const deleteUser = express.Router();

deleteUser.delete('/:_id',async(req,res) => {

    const _id = req.params._id

    if (!_id) {
        return res.status(400).json({ error: true, message: "User ID is required" });
    }
    
    try {
        const user = await User.findById(_id);

        if(!user) {
            return res.status(404).json({error:true, message: "user not found"});
        }

        await user.deleteOne();

        res.status(200).json({error:false, message: "user deleted sucessfully"});

    } catch(error) {
        console.log('error deleting user',error);
        res.status(404).json({error: true, message: "error deleting the user"});
    }
})

export default deleteUser;