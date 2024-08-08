import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useLocation } from 'react-router-dom';

type Props = {
  definition:any
}

export const EditorComp = (props: Props) => {
  const editorRef = useRef(null);
  const location = useLocation();

  const description = location.state;
 
  return (
    <>

      <Editor
        apiKey='e10ftnqiqzfmokght8vusg4py5wbqcy2jbs950p9i2vxr14z'
        // onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={description ? description : props.definition }
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
    </>
  )
}