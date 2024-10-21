import { getPorts } from "@/actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddPortfolio from "@/components/add-portfolio";
import { getServerSession } from "next-auth";

const Ports = async () => {
  const session = await getServerSession(authOptions);
  const ports = getPorts(session.user.id);
  return (
    <div className="h-screen mx-5 ">
      <div className="flex md:items-center items-end md:justify-between md:flex-row flex-col">
        <div className=" flex flex-col gap-2 my-2  md:mx-10">
          <p className="font-another text-3xl tracking-tighter font-medium">
            Ports
          </p>
          <p className="font-another font-gray-600">
            Ports are refered to the number of different portfolios you have
            created using our different templates.
          </p>
        </div>
        <AddPortfolio />
      </div>
      <div>[]</div>
    </div>
  );
};
export default Ports;
