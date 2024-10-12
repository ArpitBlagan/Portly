import { checkUserInfo } from "@/actions";

const page = ({ params }: { params: any }) => {
  const id = params.id;
  if (!checkUserInfo(id, "adventure")) {
    return (
      <div className="h-screen flex-items-center justify-center">
        <p className="font-semibold font-another">
          You need to buy this template first 🥲.
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default page;
