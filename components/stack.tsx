import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "express",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "html5",
  "css3",
  "amazonaws",
  "visualstudiocode",
];

export function IconCloudDemo() {
  return (
    <div className="relative w-full  items-center justify-center overflow-hidden rounded-lg ">
      <div className="flex items-center justify-center mt-5 top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl font-medium font-another">Stack Used</p>
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
