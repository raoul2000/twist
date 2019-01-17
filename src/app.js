import Quill from 'quill';
import '../node_modules/quill/dist/quill.snow.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
    const mainContent = document.querySelector('.cd-main-content');

    document.getElementById('slide-panel').addEventListener('transitionend',(ev)=> {
        console.log('on anima end');
    });

    document.getElementById('open-panel').addEventListener('click', (ev) => {
        document.getElementById('slide-panel').classList.add('cd-panel--is-visible');
        mainContent.classList.remove('visible');
        mainContent.classList.add('hidden');

        mainContent.style.display = 'none';
    });
    document.getElementById('close-panel').addEventListener('click', (ev) => {
        document.getElementById('slide-panel').classList.remove('cd-panel--is-visible');
        mainContent.classList.add('visible');
        mainContent.classList.remove('hidden');
        //TODO: display = block is applied before the transition end which causes the vertical scroll bar to be displayed. It would be better to display when transition ends
        
        document.querySelector('.cd-main-content').style.display = 'block';

    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initSlidePanel();
    initEditor();
    document.querySelector('body').style.display = "block";
});