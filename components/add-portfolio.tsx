import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { RiAddFill } from "@remixicon/react";
import { addPort, getTemplates } from "@/actions";
import { Key } from "react";
import { toast } from "sonner";

const AddPortfolio = async () => {
  const templates = await getTemplates();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-another font-semibold">
          <RiAddFill /> Add
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="border-b">
          <DialogTitle>Create new portfolio</DialogTitle>
          <DialogDescription>
            Choose a template and click create
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[20vh] flex flex-col gap-3">
          {templates.data &&
            templates.data.map((ele: any, index: number) => {
              return (
                <div key={index}>
                  <p>{ele.name}</p>
                  <p>{ele.description}</p>
                  <p>By: Arpit Blagan</p>
                </div>
              );
            })}
          {templates.data && templates.data.length > 0 ? (
            <p className="text-center text-gray-600">Oops that's it.</p>
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-center text-red-500">No template found.</p>
            </div>
          )}
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
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddPortfolio;
