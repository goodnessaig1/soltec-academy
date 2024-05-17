/* eslint-disable react/jsx-key */
/* eslint-disable no-async-promise-executor */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
window.global = window;
// window.global ||= window;
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { Fragment } from 'react';
import { uploadFile } from '../../../Utils/ApiRequest';
import { useState } from 'react';
import { EditorState, ContentState, Modifier } from 'draft-js';
import { convertToHTML } from 'draft-convert';

const CustomToolbar = ({ addSpacer }) => {
  return (
    <div>
      <div className='text-white bg-mainRed' onClick={addSpacer}>
        space
      </div>
    </div>
  );
};
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
        const imageUrl = response?.file; // Adjust this according to your response structure
        console.log(imageUrl);
        resolve({ data: { link: imageUrl } });
      } catch (error) {
        console.error('Upload failed:', error);
        reject(error);
      }
    });
  };

  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  // Convert raw JSON to HTML
  const html = draftToHtml(rawContentState);

  const convertContentToHTML = () => {
    return convertToHTML(editorState.getCurrentContent());
  };
  const addSpacer = () => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = Modifier.insertText(
      contentState,
      selectionState,
      '\n',
    );
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'insert-characters',
    );
    setEditorState(newEditorState);
  };

  return (
    <>
      <div
        className='rendered-content'
        dangerouslySetInnerHTML={{ __html: convertContentToHTML() }}
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
        toolbarCustomButtons={[<CustomToolbar addSpacer={addSpacer} />]}
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
