import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { memo, useCallback, useState } from "react";
import TextEditor from "../../components/Editor";
import FileInput from "../../components/FileInput";
import Button from "../../components/FormComponent/Button";
import FormItem from "../../components/FormComponent/FormItem";
import TextField from "../../components/FormComponent/TextField";
const ManagePage = memo(() => {
  const [postData, setPostData] = useState({
    editorState: EditorState.createEmpty(),
    contentData: "",
    title: "",
    thubnail: "",
  });

  const onEditorStateChange = useCallback(
    (a: EditorState) => {
      const contentData = draftToHtml(convertToRaw(a.getCurrentContent()));
      setPostData({
        ...postData,
        editorState: a,
        contentData: contentData ?? "",
      });
    },
    [postData]
  );

  const uploadImageCallBack = useCallback(() => {}, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(postData);
  };

  function createMarkup(e: string) {
    return { __html: e };
  }

  return (
    <div>
      <div className="container mt-8">
        <form onSubmit={handleSubmit}>
          <FormItem id="title" label="Title" required classWrap="mb-4">
            <TextField
              id="title"
              name="title"
              value={postData.title}
              required
              placeholder="Please fill title of post!"
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
            />
          </FormItem>

          <FormItem id="thubmnail" label="Thubmnail" required classWrap="mb-4">
           <FileInput/>
          </FormItem>

          <TextEditor
            onEditorStateChange={onEditorStateChange}
            uploadImageCallBack={uploadImageCallBack}
            editorState={postData.editorState}
          />

          <Button text="SUBMIT" type="submit" />
        </form>

        <div dangerouslySetInnerHTML={createMarkup(postData.contentData)} />
      </div>
    </div>
  );
});

export default ManagePage;
