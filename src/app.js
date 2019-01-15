import Quill from 'quill';
import '../node_modules/quill/dist/quill.snow.css'
import './style.less';

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

const initSlidePanel = () => {
    document.getElementById('open-panel').addEventListener('click', (ev) => {
        document.getElementById('slide-panel').classList.add('cd-panel--is-visible');
        document.querySelector('.cd-main-content').classList.remove('visible');
        document.querySelector('.cd-main-content').classList.add('hidden');
        document.querySelector('.cd-main-content').style.display = 'none';
    });
    document.getElementById('close-panel').addEventListener('click', (ev) => {
        document.getElementById('slide-panel').classList.remove('cd-panel--is-visible');
        document.querySelector('.cd-main-content').classList.add('visible');
        document.querySelector('.cd-main-content').classList.remove('hidden');
        document.querySelector('.cd-main-content').style.display = 'block';

    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initSlidePanel();
    initEditor();
    document.querySelector('body').style.display = "block";
});