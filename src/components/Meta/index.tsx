import React from "react";

const Meta = React.memo((props: { title: string }) => {
  return (
    <div className="flex justify-center items-center">
      <p className="w-fit whitespace-nowrap mr-[30px] text-xl leading-7">{props.title}</p>
      <div className="h-[2px] w-full bg-[#303030]"></div>
    </div>
  );
});
export default Meta;
