import React, { useRef, useState } from "react"
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  // const { loading, verifyEmail } = useUserStore();
  // const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    // Move to the next input field id a digit is entered
    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (<div className="flex items-center justify-center min-h-screen">
    <div className="p-8 rounded-md max-w-md flex flex-col gap-10 border border-gray-300 dark:border-gray-800">

      <div className="w-100 h-10  text-white flex items-center justify-center">
        <img src="logo.jpeg" alt="logo" className="w-20 h-20 rounded-full" />
      </div>

      <div className="text-center">
        <h1 className="font-extrabold text-2xl mb-2 dark:text-white">Verify your email</h1>
        <p className="text-sm text-gray-600">
          Enter the 6 digit code sent to your email address
        </p>
      </div>

      <form action="">
        <div className="flex justify-between">
          {otp.map((letter: string, idx: number) => (
            <Input
              key={idx}
              ref={(element) => (inputRef.current[idx] = element)}
              type="text"
              maxLength={1}
              value={letter}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(idx, e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyDown(idx, e)
              }
              className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none md:focus:ring-1 focus:ring-indigo-500 md:m-1 md:border border-gray-400"
            />
          ))}
        </div>
        <Button className="bg-orange hover:bg-hoverOrange mt-6 w-full dark:text-white dark:bg-red-600">
          Verify
        </Button>
      </form>

    </div>
  </div>)
}
export default VerifyEmail