import Quill from '../node_modules/quill/dist/quill.js';
import '../node_modules/quill/dist/quill.snow.css'
import './style.css';

// https://codepen.io/anon/pen/gLzmXo
/**
 * @type {Quill} Quill instance
 */
let quill = null;

const initEditor = () => {
    let saveButton = document.querySelector('.ql-save');

    document.querySelector('.ql-save').addEventListener('click', function(e) {
        console.log(quill.getContents());
      });    
    
    quill = new Quill('#quill-container', {

        modules: {
            toolbar: { 
                container : '#toolbar-container'
            }
        },
        bounds: '#scrolling-container',
        scrollingContainer: '#scrolling-container',
        placeholder: 'Enter your text',
        readOnly: false,
        theme: 'snow'
    });
};

document.addEventListener('DOMContentLoaded', (event) => {
    initEditor();
});