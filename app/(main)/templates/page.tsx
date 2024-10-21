import { getTemplates } from "@/actions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddTemplate from "@/components/add-template";
import { getServerSession } from "next-auth";

const Page = async () => {
  const templates = await getTemplates();
  const session = await getServerSession(authOptions);
  if (templates.error) {
    return (
      <div className="main_wrapper">
        <div className="main">
          <div className="antenna">
            <div className="antenna_shadow"></div>
            <div className="a1"></div>
            <div className="a1d"></div>
            <div className="a2"></div>
            <div className="a2d"></div>
            <div className="a_base"></div>
          </div>
          <div className="tv">
            <div className="cruve">
              <svg
                viewBox="0 0 189.929 189.929"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className="curve_svg"
              >
                <path
                  d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                />
              </svg>
            </div>
            <div className="display_div">
              <div className="screen_out">
                <div className="screen_out1">
                  <div className="screen">
                    <span className="notfound_text">Something went wrong</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div className="buttons_div">
              <div className="b1">
                <div></div>
              </div>
              <div className="b2"></div>
              <div className="speakers">
                <div className="g1">
                  <div className="g11"></div>
                  <div className="g12"></div>
                  <div className="g13"></div>
                </div>
                <div className="g"></div>
                <div className="g"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="base1"></div>
            <div className="base2"></div>
            <div className="base3"></div>
          </div>
        </div>
        <div className="text_404">
          <div className="text_4041">5</div>
          <div className="text_4042">0</div>
          <div className="text_4043">0</div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen mx-5">
      <div className="flex md:items-center items-end md:justify-between md:flex-row flex-col">
        <div className=" flex flex-col gap-2 my-2  md:mx-10">
          <p className="font-another text-3xl tracking-tighter font-medium">
            Templates
          </p>
          <p className="font-another font-gray-600">
            Right now only Arpit can add new templates
          </p>
        </div>
        {session.user.name == "Arpit Blagan" && <AddTemplate />}
      </div>
      {templates.data && templates.data.length == 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <p className="text-center font-medium text-2xl font-another text-gray-400">
            No Template Found...
          </p>
          <p className="font-another text-gray-500">
            Wait for Arpit to add new templates
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-500">That's it...</p>
      )}
    </div>
  );
};
export default Page;
