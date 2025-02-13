import { useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Loader2,
  LocateIcon,
  Mail,
  MapPin,
  MapPinnedIcon,
  Plus,
} from "lucide-react";

export const Profile = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [selectedProfilePicture, setSelectedProfilePicture] =
    useState<string>("");

  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePicture: "",
  });

  const loading = false;

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("file, ", file);
    if (file) {
      // instance of FileReader
      const reader = new FileReader();

      // This function (onloaded) runs when file reading is finished
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfilePicture(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };

      // This starts reading the file
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profiledata ", profileData);
  };
  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePicture} />
            <AvatarFallback className="flex items-center justify-center w-full h-full text-lg font-bold">
              CN
            </AvatarFallback>
            <input
              type="file"
              ref={imageRef}
              accept="image/*"
              className="hidden"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer transition-opacity duration-300 opacity-0 hover:opacity-100 z-10"
            >
              <Plus className="text-white w-10 h-10" />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
          />
        </div>

        <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
          <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
            <Mail className="text-gray-500" />
            <div className="w-full">
              <Label>Email</Label>
              <input
                name="email"
                value={profileData.email}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
            <LocateIcon className="text-gray-500" />
            <div className="w-full">
              <Label>Address</Label>
              <input
                name="address"
                value={profileData.address}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
            <MapPin className="text-gray-500" />
            <div className="w-full">
              <Label>City</Label>
              <input
                name="city"
                value={profileData.city}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
            <MapPinnedIcon className="text-gray-500" />
            <div className="w-full">
              <Label>Country</Label>
              <input
                name="country"
                value={profileData.country}
                onChange={changeHandler}
                className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange">
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="bg-orange hover:bg-hoverOrange">
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

// useRef() step by step execution
// 1. On initial render of component (before mounting or input element exist is virtual DOM) -> imageRef.current = null
// 2. On first mounting, React assing imageRef.current to current DOM element ( ref={imageRef} )
// 3. Now imageRef.current points to <input /> element
// 4. Now we have the element, do something with the element like click() or foucs() -> imageRef.current?.click() --> this will click the input field automatically without human interaction because of .click().
// NOTE: we are clickng the div and this div is clicking the <input /> field due to .click() like .focus()
// Since it is a file type, it will open file-system

// something.current always point to an acutal DOM element after mounting using ref

// -------------------------

// readAsDataURL - is a method of the FileReader API that reads the content of a file (usually an image, PDF, or other media) and converts it into a Base64-encoded data URL.

// Direct destructuring (...profileData)	When the update happens synchronously, and we are sure that profileData is up to date.
// Functional update ((prevData) => {...prevData})	When updating state inside an async callback (e.g., onloadend, useEffect, API calls) to avoid stale state issues.
