import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';

export const Login = async (req,res) =>{
    try{
        const { email, password } = req.body;
        if(!email||!password) return res.status(401).json({sucess: false, message: "All fields are mandatory.."})
        const user = await UserModal.findone({email: email});
        
        if(!user) return res.send(401).json({sucess: false, message:"Email is wrong!!"})
        const isPassword = await bcrypt.compare(password,user.password);
        
        if (!isPassword) return res.status(401).json({success:false, message:'Password is wrong!!'})
        const token = await Jwt.sign({_id: user._id}, process.env.SECRET_KEY,)
        
        return res.status(200).json({success: true, message:"lOGIN SUCCESSFUL..", user:{name:user.name,id:user.id},token})
    
    } catch (error){
        return res.send(500).json({sucess: false, message: error})
    }
}

export const Register = (req,res) =>{
    res.send("Hi from Register")
}

export const getCurrentUser = async (req,res) =>{
   try{
    const {token} = req.body;
    if (token) return res.status(401).json({success:false, message:"Token is required"})

    const {id} = Jwt.verify(token, process.env.JWT_Secret)
    
    const user = await UserModel.findById(id)
    if(!user) return res.status(401).json({success:false, message:"Invalid Token"})
    
    return res.status(200).json({success:true, user:{name: user.name}})
    
   }catch (error){
    return res.status(500).json({succes:false, message: error})
   }
}