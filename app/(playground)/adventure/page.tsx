const page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div
        className="w-[400px] h-[400px]"
        style={{
          borderRadius: "75% 9% 55% 37% / 75% 24% 76% 25%",
          background: "#f77979",
          background:
            "-webkit-radial-gradient(circle, #f77979 0%, #e969a3 100%)",
          background: "radial-gradient(circle, #f77979 0%, #e969a3 100%)",
        }}
      >
        Cool
      </div>
    </div>
  );
};

export default page;
