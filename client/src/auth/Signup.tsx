import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Separator } from '../components/ui/separator'
import { Contact, LockKeyhole, Mail, User } from 'lucide-react'
import { Link } from "react-router-dom";
import { SignupInputState, userSignupSchema } from '../schema/userSchema'
import { useUserStore } from '@/store/useUserStore'

const Signup = () => {
    const [input, satInput] = useState<SignupInputState>({
        fullname: "",
        email: "",
        password: "",
        contact: "",
    });
    const [errors, setErrors] = useState<Partial<SignupInputState>>({});
    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        satInput({ ...input, [name]: value });
    }
    const {signup} = useUserStore();
    const SignupSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const result = userSignupSchema.safeParse(input);
        if(!result.success){
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }
        // signup api implimentation
        await signup(input);
    }
    return <>
        <div className='flex items-center justify-center min-h-screen'>
            <form className='md:p-8 max-w-md md:border border-gray-300 dark:border-gray-800 rounded-lg min-h-20' onSubmit={SignupSubmitHandler}>

                <div className="w-100 h-10 md:rounded-full rounded-full  text-white flex items-center justify-center mb-8">
                    <img src="logo.jpeg" alt="logo" className="w-20 h-20 rounded-full" />
                </div>

                <h1 className="text-center text-[#030712] font-semibold text-3xl mb-4 dark:text-white">Sign up to your Account</h1>

                <p className="text-center text-[#374151] font-semibold text-1xl mb-10">Welcome back! Ansh-eat Shop...</p>

                <div className="mb-3 relative">
                    <Input type="fullname" value={input.fullname} onChange={changeEventHandler} placeholder="Full name" name="fullname" className='pl-10 focus-visible:ring-1' />
                    <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    { errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
                </div>
                <div className="mb-3 relative">
                    <Input type="email" value={input.email} onChange={changeEventHandler} placeholder="Email" name="email" className='pl-10 focus-visible:ring-1' />
                    <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    { errors && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>

                <div className="relative mb-3">
                    <Input type='Password' name='password' value={input.password} onChange={changeEventHandler} placeholder='Password' className="pl-10 focus-visible:ring-1" />
                    <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    { errors && <span className="text-xs text-red-500">{errors.password}</span>}
                </div>

                <div className="relative mb-3">
                    <Input type='contact' name='contact' value={input.contact} onChange={changeEventHandler} placeholder='9876543210' className="pl-10 focus-visible:ring-1" />
                    <Contact className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    { errors && <span className="text-xs text-red-500">{errors.contact}</span>}
                </div>

                <div className="mb-10 mt-5">
                    <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange text-gray-200 dark:bg-red-600 text-1xl">Signup</Button>
                </div>

                <Separator />

                <p className='justify-center mt-5 ml-8'>
                    Already have an account?
                    <Link to='/Login' className='ml-2 text-blue-500'>Login</Link>
                </p>

            </form>
        </div>
    </>
}
export default Signup