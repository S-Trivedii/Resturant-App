import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

export const Resturant = () => {
  const [input, setInput] = useState({
    resturantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cusinies: [] as string[],
    imageFile: undefined as File | undefined,
  });

  const loading = false;
  const resturantHai = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
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
              </div>
              <div>
                <Label>Cusinies</Label>
                <Input
                  type="text"
                  placeholder="e.g. Pasta, Biryani"
                  value={input.cusinies}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      cusinies: e.target.value.split(","),
                    })
                  }
                  name="cusinies"
                />
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
