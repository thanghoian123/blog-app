import React from "react";
import Meta from "../Meta";
interface IProps {
  metaTitle: string;
  children: JSX.Element;
}
const Section = React.memo((props: IProps) => {
  return (
    <div className="p-[30px]">
      <div className="mb-[30px]">
        <Meta title={props.metaTitle} />
      </div>
      <div>{props.children}</div>
    </div>
  );
});

export default Section;
