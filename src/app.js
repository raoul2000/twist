import Quill from 'quill';
import '../node_modules/quill/dist/quill.snow.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.less';

//import './editor.js';

// https://codepen.io/anon/pen/gLzmXo
/**
 * @type {Quill} Quill instance
 */
let quill = null;

const initEditor = () => {

    let Inline = Quill.import('blots/inline');


    quill = new Quill('#quill-container', {
        modules: {
            toolbar: {
                container: '#toolbar-container'
            }
        },
        bounds: '#scrolling-container',
        scrollingContainer: '#scrolling-container',
        placeholder: 'Enter your text',
        readOnly: false,
        theme: 'snow'
    });

    document.querySelector('.ql-save').addEventListener('click', function (e) {
        console.log(quill.getContents());
        debugger;
    });

    let BlockEmbed = Quill.import('blots/block/embed');

    class DividerBlot extends BlockEmbed { }
    DividerBlot.blotName = 'divider';
    DividerBlot.tagName = 'hr';
    Quill.register(DividerBlot);
    document.getElementById('custom3-button').addEventListener('click', (ev) => {
        let range = quill.getSelection(true);
        quill.insertText(range.index, '\n', Quill.sources.USER);
        quill.insertEmbed(range.index + 1, 'divider', true, Quill.sources.USER);
        quill.setSelection(range.index + 2, Quill.sources.SILENT);        
    });

    let Block = Quill.import('blots/block');

    class BlockquoteBlot extends Block { }
    BlockquoteBlot.blotName = 'blockquote1';
    BlockquoteBlot.tagName = 'blockquote';
    Quill.register(BlockquoteBlot);

    document.getElementById('custom2-button').addEventListener('click', (ev) => {
        quill.format('blockquote1', true);
    });


    class DummyBlot extends Inline { }
    DummyBlot.blotName = 'dummyName';
    DummyBlot.tagName = 'dummy';

    Quill.register(DummyBlot);

    document.getElementById('custom1-button').addEventListener('click', (ev) => {
        quill.format('dummyName', true);
    });

};

const initSlidePanel = () => {
    const mainContent = document.querySelector('.cd-main-content');
    const slidePanel = document.getElementById('slide-panel');

    // open the panel 
    document.getElementById('open-panel').addEventListener('click', (ev) => {

        mainContent.addEventListener('transitionend', (ev) => {
            mainContent.style.display = 'none';
        }, { "once": true });

        mainContent.classList.remove('visible');
        mainContent.classList.add('hidden');
        slidePanel.classList.add('cd-panel--is-visible');
    });

    // close the panel
    document.getElementById('close-panel').addEventListener('click', (ev) => {
        slidePanel.addEventListener('transitionend', (ev) => {
            setTimeout(() => {
                mainContent.style.display = 'block';
            }, 300);

        }, { "once": true });

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