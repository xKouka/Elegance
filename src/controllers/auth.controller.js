import User from '../models/user.models.js'
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';

export const register = async (req,res) => {
    const {name,email,password} = req.body;
    
    try{

        const userFound = await User.findOne({email})
        if (userFound) 
            return res.status(400).json(["El email ya esta en uso"]);


        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password:passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccesToken({id: userSaved._id})
        res.cookie("token", token)
        res.json({
            message:"Usuario creado"
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const login = async (req,res) => {
    const {email,password} = req.body;

    try{
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({message:'incorrecto'})

        const token = await createAccesToken({id: userFound._id })
        res.cookie("token", token)
        res.json({
            message:"Sesion iniciada"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const logout = (req,res) =>{
    res.cookie('token',"" ,{
        espires: new Date(0)
    })
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.name.id)

if (!userFound) return res.status(400).json({message:"user not found"});

return res.json({
    id: userFound._id,
    name: userFound.name,
    email: userFound.email,
    createAt:userFound.createdAt,
    updateAt:userFound.updatedAt
})
    res.send('profile')
}