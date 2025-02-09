import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RegisterInputState, userSignupSchema } from "@/schema/userSchema";

import { Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const loading = false;
  const [registerInput, setRegisterInput] = useState<RegisterInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const [error, setError] = useState<Partial<RegisterInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterInput({ ...registerInput, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    const result = userSignupSchema.safeParse(registerInput);
    // console.log(result); {success: true, data: {...}}

    // validation failed
    if (!result.success) {
      const validationError = result.error.formErrors.fieldErrors;
      setError(validationError as Partial<RegisterInputState>);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={formSubmitHandler}>
        <h1 className="text-center text-2xl font-bold">Eat&Dine</h1>
        <div className="mb-4 relative">
          <Label>FullName</Label>
          <Input
            type="text"
            placeholder="Full Name"
            className="pl-10 focus-visible:ring-1"
            name="fullname"
            value={registerInput.fullname}
            onChange={changeEventHandler}
          />
          <User className="absolute inset-y-8 left-2 text-gray-500 pointer-events-none" />
          {error && (
            <span className="text-xs text-red-500">{error.fullname}</span>
          )}
        </div>
        <div className="mb-4 relative">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            className="pl-10 focus-visible:ring-1"
            name="email"
            value={registerInput.email}
            onChange={changeEventHandler}
          />
          <Mail className="absolute inset-y-8 left-2 text-gray-500 pointer-events-none" />
          {error && <span className="text-xs text-red-500">{error.email}</span>}
        </div>
        <div className="mb-4 relative">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            className="pl-10 focus-visible:ring-1"
            name="password"
            value={registerInput.password}
            onChange={changeEventHandler}
          />
          <LockKeyhole className="absolute inset-y-8 left-2 text-gray-500 pointer-events-none" />
          {error && (
            <span className="text-xs text-red-500">{error.password}</span>
          )}
        </div>

        <div className="mb-4 relative">
          <Label>Contact</Label>
          <Input
            type="text"
            placeholder="Contact"
            className="pl-10 focus-visible:ring-1"
            name="contact"
            value={registerInput.contact}
            onChange={changeEventHandler}
          />
          <PhoneCall className="absolute inset-y-8 left-2 text-gray-500 pointer-events-none" />
          {error && (
            <span className="text-xs text-red-500">{error.contact}</span>
          )}
        </div>

        {loading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange w-full">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-orange hover:bg-hoverOrange w-full"
          >
            Sign up
          </Button>
        )}

        <Separator />
        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
