import { memo } from "react";
import { Editor, EditorProps } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
interface ITextEditorProps extends EditorProps {
  uploadImageCallBack: () => void;
}

const TextEditor = memo((props: ITextEditorProps) => {
  const { onEditorStateChange, uploadImageCallBack, editorState } = props;

  return (
    <div className="">
      <Editor
        wrapperClassName="border border-slate-200 min-h-[500px]"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: true },
          },
        }}
      />
    </div>
  );
});

export default TextEditor;
