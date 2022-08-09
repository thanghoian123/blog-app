import React from "react";
import tempAvatar from "../../assets/images/tempAvatar.png";
interface IProps {
  author?: string;
  src?: string;
}
const Avatar = React.memo((props: IProps) => {
  return (
    <div className="flex">
      <div className="w-6 h-6 rounded-full bg-orange-500 relative overflow-hidden mr-[8px]">
        <img src={props?.src ?? tempAvatar} alt="" className="absolute bottom-0" />
      </div>
      <p className="underline font-normal text-base text-[#364F6B] cursor-pointer">{props.author}</p>
    </div>
  );
});
export default Avatar;
