import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Loader2, Moon, ShoppingCart, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Navabar = () => {
  const admin = false;
  const loading = false;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="text-2xl font-bold">Eat&Dine</h1>{" "}
        </Link>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order">Order</Link>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">
                    Dashboard
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      <Link to="/admin/resturant">Resturant</Link>
                    </MenubarItem>
                    <MenubarItem>
                      <Link to="/admin/menu">Menu</Link>
                    </MenubarItem>
                    <MenubarItem>
                      <Link to="/admin/order">Order</Link>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link to="/cart" className="relative cursor-pointer">
              {" "}
              <ShoppingCart />{" "}
              <Button
                size={"icon"}
                className="absolute -inset-y-3 left-2 text-xs rounded-full w-4 h-4 bg-red-500 hover:bg-red-500"
              >
                5
              </Button>
            </Link>
            <div>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {loading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  Logout
                </Button>
              )}
            </div>
          </div>
          <div>{/* Mobile Resoponsive */}</div>
        </div>
      </div>
    </div>
  );
};
