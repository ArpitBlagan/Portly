import React from "react";
import TemplateCard from "./template-card";
import template1 from "@/image/template1.jpg";
import template2 from "@/image/template2.jpg";
import template3 from "@/image/template3.jpg";
import template4 from "@/image/template4.jpg";
import ShimmerButton from "./ui/shimmer-button";
const Templates = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="mb-4">
        <p className="text-2xl font-semibold text-center">
          Explore new template designs
        </p>
      </div>
      <div className=" w-full grid md:grid-cols-3 gap-5">
        <TemplateCard
          src={template1}
          text="Broken"
          textType="not"
          textColor="black"
          link="/broken"
        />
        <TemplateCard
          src={template3}
          text="Adventure"
          textType="not"
          textColor="white"
          link="/adventrue"
        />
        <TemplateCard
          src={template2}
          text="  Twisted"
          textType="cursive"
          textColor="black"
          link="/twisted"
        />

        <TemplateCard
          src={template4}
          text="Classic"
          textType="cursive"
          textColor="white"
          link="/classic"
        />
      </div>
      <div className="z-10 flex min-h-64 items-center justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            More coming soon
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default Templates;
