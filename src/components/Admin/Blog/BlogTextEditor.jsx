/* eslint-disable react/jsx-key */
/* eslint-disable no-async-promise-executor */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
window.global = window;
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { uploadFile } from '../../../Utils/ApiRequest';
import { useState } from 'react';
import { convertToRaw } from 'draft-js';

export default function BlogTextEditor({ setEditorState, editorState }) {
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
  };

  const [loading, setLoading] = useState(false);

  const uploadImageCallBack = file => {
    return new Promise(async (resolve, reject) => {
      try {
        const formData = new FormData();
        formData.append('file', file);
        const response = await uploadFile(formData, setLoading);
        const imageUrl = response?.file;
        console.log(imageUrl);
        resolve({ data: { link: imageUrl } });
      } catch (error) {
        alert(
          'An error occured, please upload the image again or try another media',
        );
        console.error('Upload failed:', error);
        reject(error);
      }
    });
  };

  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const html = draftToHtml(rawContentState);

  return (
    <>
      <div
        className='rendered-content'
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Editor
        editorState={editorState}
        toolbarClassName='toolbarClassName'
        wrapperClassName='wrapperClassName'
        editorClassName='editorClassName'
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: {
            uploadCallback: uploadImageCallBack,
            alt: { present: true, mandatory: false },
          },
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [
            { text: 'soltec', value: 'soltec' },
            { text: 'academy', value: 'academy', url: 'academy' },
            { text: 'engineering', value: 'engineering', url: 'engineering' },
            {
              text: 'Product design',
              value: 'Product design',
              url: 'Product design',
            },
            { text: 'Frontend', value: 'Frontend', url: 'Frontend' },
          ],
        }}
      />
    </>
  );
}
