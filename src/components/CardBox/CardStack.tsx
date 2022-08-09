import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CommentIcon } from "../../assets/icon/comment.svg";

import { ETag, Tag } from "../tag";

export interface ICardProps {
  title: string;
  image?: string;
  description: string;
  tag: string;
  created: string;
  comments: any;
  isLarge?: boolean;
  author?: string;
}

export const tagType = (tag: string) => {
  switch (tag) {
    case "Technology":
      return ETag.Technology;
    case "Design":
      return ETag.Design;
    case "React":
      return ETag.React;
    default:
      return ETag.React;
  }
};
const CardStack = React.memo((props: ICardProps) => {
  const styles = {
    wrapper: props.isLarge
      ? "w-full sm:h-[350px] md:w-full md:h-[532px] relative "
      : "w-full h-[350px] relative bg-red",
  };

  const tag = React.useCallback(() => tagType(props.tag), [props.tag]);

  return (
    <div className={styles.wrapper}>
      <img
        src={props.image}
        alt="zz"
        className="w-full h-full object-cover absolute z-10"
      />

      <div className="z-20 absolute bottom-0 px-[30px] py-[20px]">
        {/* tag */}
        <Tag variant={tag()} />
        {/*  */}
        <div className="font-bold text-2xl text-white underline my-[10px]">
          <Link to={"/"}>{props.title}</Link>
        </div>

        {/*  infomation*/}
        <div className="flex">
          <p className="text-white text-xs mr-6">{`Added: ${props.created}`}</p>
          <div className="flex">
            <CommentIcon color="#fff" />
            <p className="text-white text-xs ml-2"> {`${props.comments}`}</p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
});

export default CardStack;
