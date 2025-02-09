import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";

import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const loading = false;
  const [loginInput, setLoginInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<Partial<LoginInputState>>({});

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    // validation check
    const result = userLoginSchema.safeParse(loginInput);

    if (!result.success) {
      const validationErr = result.error.formErrors.fieldErrors;
      setError(validationErr as Partial<LoginInputState>);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={formSubmitHandler}>
        <h1 className="text-center text-2xl font-bold">Eat&Dine</h1>
        <div className="mb-4 relative">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            className="pl-10 focus-visible:ring-1"
            name="email"
            value={loginInput.email}
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
            value={loginInput.password}
            onChange={changeEventHandler}
          />
          <LockKeyhole className="absolute inset-y-8 left-2 text-gray-500 pointer-events-none" />
          {error && (
            <span className="text-xs text-red-500">{error.password}</span>
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
            Login
          </Button>
        )}

        <div className="my-3 text-center">
          <Link to="/forget-password" className="text-sm text-blue-500">
            Forget Password
          </Link>
        </div>

        <Separator />
        <p className="mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};
