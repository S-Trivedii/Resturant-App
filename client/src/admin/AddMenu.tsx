import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useState } from "react";
import Image from "@/assets/hero_pizza.png";
import { EditMenu } from "./EditMenu";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";

const menus = [
  {
    name: "Tandoori Roti",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 80,
    image: Image,
  },
  {
    name: "Biryani",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    price: 70,
    image: Image,
  },
];

export const AddMenu = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
    image: undefined as File | undefined,
  });

  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [error, setError] = useState<Partial<MenuFormSchema>>({});
  const loading = false;

  // Select menu for edit
  const [selectedMenu, setSelectedMenu] = useState<MenuFormSchema>();

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({
      ...input,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  // API + Validation result
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = menuSchema.safeParse(input);
    // console.log("Result, ", result);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<MenuFormSchema>);
      // console.log("Errors-: ", error);

      return;
    }

    // No error
    setError({});

    console.log(input);
  };
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menus
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange hover:bg-hoverOrange">
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add A New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your resturant stand out
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submitHandler} className="space-y-4">
              <div>
                <Label>Menu</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  placeholder="Enter a menu name"
                  onChange={changeEventHandler}
                />
                {error && (
                  <span className="text-xs text-red-600 font-medium">
                    {error.name}
                  </span>
                )}
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  placeholder="Enter a menu description"
                  onChange={changeEventHandler}
                />
                {error && (
                  <span className="text-xs text-red-600 font-medium">
                    {error.description}
                  </span>
                )}
              </div>
              <div>
                <Label>Price in (Rupees)</Label>
                <Input
                  type="number"
                  name="price"
                  value={input.price}
                  placeholder="Enter menu price"
                  onChange={changeEventHandler}
                />
                {error && (
                  <span className="text-xs text-red-600 font-medium">
                    {error.price}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      image: e.target.files?.[0],
                    })
                  }
                />
                {error && error.image && typeof error.image === "string" && (
                  <span className="text-xs text-red-600 font-medium">
                    {error.image}
                  </span>
                )}
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverOrange">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-hoverOrange">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {menus.map((menu: MenuFormSchema, idx: number) => (
        <div key={idx} className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
            <img
              src={menu.image}
              alt=""
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-sm tex-gray-600 mt-1">{menu.description} </p>
              <h2 className="text-md font-semibold mt-2">
                Price: <span className="text-[#D19254]"> {menu.price} </span>
              </h2>
            </div>
            <Button
              onClick={() => {
                setEditOpen(true);
                setSelectedMenu(menu);
              }}
              size={"sm"}
              className="bg-orange hover:bg-hoverOrange mt-2"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}

      <EditMenu
        selectedMenu={selectedMenu}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  );
};
