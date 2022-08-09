import { memo } from "react";

interface IFormItemProps {
  id: string;
  required?: boolean;
  children: JSX.Element;
  label?: string;
  classWrap?: string;
}
const FormItem = memo((props: IFormItemProps) => {
  return (
    <div className={props.classWrap}>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {props.label}
        </label>
      )}

     {props.children}
    </div>
  );
});

export default FormItem;
