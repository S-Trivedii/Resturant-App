import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRef } from "react";

export const Profile = () => {
  const imageRef = useRef<HTMLInputElement>(null);

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
  };
  return (
    <form className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage />
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
        </div>
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
