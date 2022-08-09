import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CommentIcon } from "../../assets/icon/comment.svg";
import Avatar from "../Avatar";
import { Tag } from "../tag";
import { ICardProps, tagType } from "./CardStack";

const CardBox = React.memo((props: ICardProps) => {
  const styles = {
    wrapper: `bg-[#F5F5F5] grid text-[#151F2A] ${
      props.image ? `md:grid-cols-2` : `md:grid-cols-1`
    } `,
  };
  return (
    <div className={styles.wrapper}>
      {props.image && (
        <div>
          <img src={props.image} alt="box" className="object-cover" />
        </div>
      )}

      <div className="p-[30px]">
        <Tag variant={tagType(props.tag)} />
        <div className="my-[10px]">
          {/*  infomation*/}
          <div className="font-bold text-2xl leading-9 text-[#151F2A] underline">
            <Link to={"/"}>{props.title}</Link>
          </div>
          <div className="flex">
            <p className="text-xs mr-6 leading-6">{`Added: ${props.created}`}</p>
            <div className="flex justify-center items-center">
              <CommentIcon color="#000" />
              <p className="text-xs ml-2"> {`${props.comments}`}</p>
            </div>
          </div>
          {/*  */}
        </div>

        <p className="text-[16px] leading-7 text-[#151F2A] mb-[20px]">
          {props.description}
        </p>

        <div className="flex justify-between items-center underline decoration-emerald-400 cursor-pointer">
          <Avatar author={props.author} />
          <Link to={"/"}>
            <p className="text-emerald-400">Read more</p>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default CardBox;
