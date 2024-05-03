/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
window.global = window;
// window.global ||= window;
import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { Fragment } from 'react';
export default function BlogTextEditor({ setEditorState, editorState }) {
  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
  };

  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  // Convert raw JSON to HTML
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
