import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState, useRef, ChangeEvent } from "react";

export const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Array of input refs
  const loading = false;

  const handleChange = (idx: number, otpValue: string) => {
    const digit = otpValue;

    // Allow only single digit ('a', 'A', 2, '') or empty string
    if (/^[a-zA-Z0-9]$/.test(digit) || digit === "") {
      const newOtp = [...otp];
      newOtp[idx] = digit;
      setOtp(newOtp);
    }

    // Automatically move to the next input field
    if (digit !== "" && idx < otp.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold mb-2">Verify Email</h1>
          <p className="text-sm">Enter your 6 digit code sent to your email</p>
        </div>
        <div className="flex mx-auto">
          {otp.map((letter: string, idx: number) => {
            return (
              <Input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                maxLength={1}
                value={letter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(idx, e.target.value)
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(idx, e)
                }
                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg mx-1 border border-gray-400 outline-none"
              />
            );
          })}
        </div>

        {loading ? (
          <Button
            disabled
            className="bg-orange hover:bg-hoverOrange mt-6 w-full"
          >
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button className="bg-orange hover:bg-hoverOrange mt-6 w-full">
            Verify
          </Button>
        )}
      </form>
    </div>
  );
};
