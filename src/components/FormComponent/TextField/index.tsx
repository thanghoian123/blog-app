import { memo } from "react";

interface ITextFieldProps {
  id: string;
  name: string;
  required: boolean;
  placeholder?: string;
  onChange: (e: any) => void;
  value: string | number;
}
const TextField = memo((props: ITextFieldProps) => {
  return (
    <input
      className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      {...props}
    />
  );
});

export default TextField;
