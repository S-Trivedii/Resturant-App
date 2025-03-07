import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  resturantFormSchema,
  ResturantFormSchema,
} from "@/schema/resturantSchema";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

export const Resturant = () => {
  const [input, setInput] = useState<ResturantFormSchema>({
    resturantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisine: [],
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Partial<ResturantFormSchema>>({});

  const loading = false;
  const resturantHai = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation check
    const result = resturantFormSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<ResturantFormSchema>);

      return;
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Resturant</h1>
          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              <div>
                <Label>Resturant Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your restaurant name"
                  value={input.resturantName}
                  onChange={changeEventHandler}
                  name="resturantName"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.resturantName}
                  </span>
                )}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  placeholder="Enter your city name"
                  value={input.city}
                  onChange={changeEventHandler}
                  name="city"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.city}
                  </span>
                )}
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  placeholder="Enter your country name"
                  value={input.country}
                  onChange={changeEventHandler}
                  name="country"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.country}
                  </span>
                )}
              </div>
              <div>
                <Label>Delivery Time</Label>
                <Input
                  type="number"
                  placeholder="Enter your delivery time"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                  name="deliveryTime"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  placeholder="e.g. Pasta, Biryani"
                  value={input.cuisine}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      cuisine: e.target.value.split(","),
                    })
                  }
                  name="cuisine"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.cuisine}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Resturant Banner</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0],
                    })
                  }
                  name="imageFile"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.imageFile?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="my-5 w-fit">
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  {resturantHai
                    ? "Update your resturant"
                    : "Add your resturant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
