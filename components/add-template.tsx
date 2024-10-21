"use client";
import { RiAddFill, RiCloseLine } from "@remixicon/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
export type MediaFile = {
  file: File;
  preview: string;
  type: string;
};
const AddTemplate = () => {
  const [mediaFile, setMediaFile] = useState<MediaFile | null>(null);
  const inpRef = useRef(null);
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let file = e.target.files[0];
      const newMediaFile = {
        file,
        preview: URL.createObjectURL(file),
        type: "image",
      };
      setMediaFile(newMediaFile);
    }
  };

  const handleRemoveMedia = () => {
    setMediaFile(null);
    if (inpRef.current) {
      //@ts-ignore
      inpRef.current.value = null;
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-another font-semibold">
          <RiAddFill /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="border-b">
          <DialogTitle>Add a new template</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="min-h-[20vh] flex flex-col gap-3">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label>Cover Image</label>
              <Input
                ref={inpRef}
                type="file"
                placeholder="Select your profile image"
                onChange={handleMediaChange}
              />
              {mediaFile && (
                <div className="relative">
                  <div className="flex items-center justify-center bg-white/10">
                    <div className="w-40 h-40 rounded-full overflow-hidden relative ">
                      <Image
                        src={mediaFile.preview} // Replace with your image path
                        alt="Circular Image"
                        layout="fill" // Fills the container
                        objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1"
                    onClick={() => handleRemoveMedia()}
                  >
                    <RiCloseLine className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <Input
                placeholder="Enter Template title"
                className="h-[50px]"
                //   {...register("name")}
              />
              {/* {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )} */}
            </div>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <Textarea
                placeholder="Enter a description"
                className="h-[50px]"
                //   {...register("email")}
              />
              {/* {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )} */}
            </div>
          </form>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   toast.promise(
            //     async () => {
            //       const res = await addPort("", "");
            //       if (res.error) {
            //         throw Error("hehehe");
            //       }
            //       return res;
            //     },
            //     {
            //       loading: "Loading...",
            //       success: () => {
            //         return "port created successfully 😁.";
            //       },
            //       error: () => {
            //         return "Something went wrong please try again later ❌.";
            //       },
            //     }
            //   );
            // }}
            className="bg-green-600 hover:bg-green-700"
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddTemplate;
