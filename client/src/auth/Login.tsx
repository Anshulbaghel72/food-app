import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Separator } from '../components/ui/separator'
import { LockKeyhole, Mail } from 'lucide-react'
import { Link } from "react-router-dom";
import { LoginInputState, userSignupSchema } from '../schema/userSchema'


const Login = () => {
    const [input, satInput] = useState<LoginInputState>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Partial<LoginInputState>>({});
    const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        satInput({...input,[name]:value});
    }

    const LoginSubmitHandler = (e:FormEvent) =>{
        e.preventDefault();
        const result = userSignupSchema.safeParse(input);
        if(!result.success){
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return;
        }
        console.log(input);
    }
    return <>
        <div className='flex items-center justify-center min-h-screen'>
            <form className='md:p-8 max-w-md md:border border-gray-300 dark:border-gray-800 rounded-lg min-h-20' onSubmit={LoginSubmitHandler}>

                <div className="w-100 h-10  text-white flex items-center justify-center mb-8">
                    <img src="logo.jpeg" alt="logo" className="w-20 h-20 rounded-full" />
                </div>

                <h1 className="text-center text-[#030712] font-semibold text-3xl mb-4 dark:text-white">Log in to your Account</h1>
                <p className="text-center text-[#374151] font-semibold text-1xl mb-10">Welcome back! Ansh-eat Shop...</p>
                <div className="mb-3 relative">
                    <Input type="email" value={input.email} onChange={changeEventHandler} placeholder="Email" name="email" className='pl-10 focus-visible:ring-1' />
                    <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    { errors && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
                <div className="relative">
                    <Input type='Password' name='password' value={input.password} onChange={changeEventHandler} placeholder='Password' className="pl-10 focus-visible:ring-1" />
                    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    { errors && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>
                <div className="mb-10 mt-5">
                    <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange text-gray-200 text-1xl dark:bg-red-600">Login</Button>
                    <div className="mt-4">
            <Link
              to="/forgot-password"
              className="hover:text-blue-500"
            >
              Forgot Password
            </Link>
          </div>
                </div>
                
                <Separator />
                <p className='justify-center mt-5 ml-8'>
                    Don't have an account?
                    <Link to="/signup" className=" ml-2 text-blue-500">Signup</Link>
                </p>
            </form>
        </div>
    </>
}
export default Login