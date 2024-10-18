import { useState } from "react";
import { Input } from "../components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from '../components/ui/separator'

const Forgetpassword = () => {
    const [email, setEmail] = useState<string>("");
    const loading = false;
   

    return (<>
    <div className="flex items-center justify-center min-h-screen">
        <form className="flex flex-col gap-5 md:p-8 max-w-md rounded-lg mx-4 md:border border-gray-300 dark:border-gray-800">

            <div className="w-100 h-10 text-white flex items-center justify-center mb-8">
                <img src="logo.jpeg" alt="logo" className="w-20 h-20 rounded-full" />
            </div>

            <div className="text-center">
                <h1 className="font-extrabold text-2xl mb-4 dark:text-white">Forgot Password</h1>
                <p className="text-sm text-gray-600">Enter your email address to reset your password</p>
            </div>

            <div className="relative w-full">
                <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10"
                />
                <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
            </div>

            {
                loading ? (
                    <Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>
                ) : (
                    <Button className="bg-orange hover:bg-hoverOrange dark:text-white dark:bg-red-600">Send Reset Link</Button>
                )
            }

            <Separator />

            <span className="text-center">
                Back to{" "}
                <Link to="/login" className="text-blue-500">Login</Link>
            </span>

        </form>

    </div>
    </>);
}
export default Forgetpassword