import { memo } from "react";

const FileInput = memo(() => {
  return (
    <div>
      <input
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer "
        id="file_input"
        type="file"
      />

      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
});

export default FileInput;
