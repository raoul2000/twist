import Quill from '../node_modules/quill/dist/quill.js';
import '../node_modules/quill/dist/quill.snow.css'
import './style.css';

/**
 * @type {Quill} Quill instance
 */
let quill = null;

const initEditor = () => {
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