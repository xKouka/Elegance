import {z} from 'zod'

export const registerSchema  = z.object({
    name: z.string({
        required_error:'Nombre es requerido'
    }),
    email: z
    .string({
        required_error: 'Email es requerido'
    })
    .email({
        message:'Email invalido'
    }),
    password : z
    .string({
        required_error: 'Contraseña es requerida'
    })
    .min(6,{
        message: 'La contraseña debe tener al menos 6 caracteres '
    })

})

export const loginSchema = z.object({
    email: z
    .string({
        required_error: 'Email es requerido'
    })
    .email({
        message:'Email invalido'
    }),
    password : z
    .string({
        required_error: 'Contraseña es requerida'
    })
    .min(6,{
        message: 'La contraseña debe tener al menos 6 caracteres '
    })
})