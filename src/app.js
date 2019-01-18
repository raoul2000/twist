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
    const slidePanel = document.getElementById('slide-panel');

    // open the panel 
    document.getElementById('open-panel').addEventListener('click', (ev) => {

        mainContent.addEventListener('transitionend', (ev)=> {
            mainContent.style.display = 'none';
        },{"once" : true});

        mainContent.classList.remove('visible');
        mainContent.classList.add('hidden');        
        slidePanel.classList.add('cd-panel--is-visible');
    });

    // close the panel
    document.getElementById('close-panel').addEventListener('click', (ev) => {      
        slidePanel.addEventListener('transitionend', (ev)=> {
            setTimeout( () => {
                mainContent.style.display = 'block';
            },300);            
            
        },{"once" : true});

        slidePanel.classList.remove('cd-panel--is-visible');
        mainContent.classList.add('visible');
        mainContent.classList.remove('hidden');
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initSlidePanel();
    initEditor();
    document.querySelector('body').style.display = "block";
});