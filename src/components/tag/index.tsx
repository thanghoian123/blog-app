import React from "react";

export enum ETag {
  Technology = "Technology",
  Design = "Design",
  React = "React",
}

export interface ITagProps {
  variant: ETag;
}

export const Tag = React.memo((props: ITagProps) => {
  const variants = React.useCallback(() => {
    switch (props.variant) {
      case ETag.Technology:
        return `bg-fuchsia-600`;
      case ETag.Design:
        return `bg-orange-500`;
      case ETag.React:
        return `bg-teal-500`;
    }
  }, [props.variant]);

  const textVariant = React.useCallback(() => {
    switch (props.variant) {
      case ETag.Technology:
        return `Technology`;
      case ETag.Design:
        return `Design`;
      case ETag.React:
        return `React`;
    }
  }, [props.variant]);
  return (
    <div
      className={`${variants()} px-[10px] py-[6px] text-white w-fit font-normal text-xs leading-3`}
    >
      {textVariant()}
    </div>
  );
});
