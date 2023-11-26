import UserModal from './../Modals/User.Modal.js';

export const checkUserId = async (req,res,next) => {
    try{
        const {id} = req.body;
        const user =await.UserModal.findById(id);
        if(user){
            next();
        } else{
            return res.status(404).json({message:"User not found.", sucesss: false})
        }
    } catch (error){
        return res.status(500).json({message: error, success: false})
    }
}
