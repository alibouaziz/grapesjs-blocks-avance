import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {btnStyle} from './consts';

export default grapesjs.plugins.add('gjs-blocks-avance', (editor, opts = {}) => {
    const options = {...{
                blocks: ['grid-items', 'list-items', 'header', 'section', 'footer', 'iframe', 'link-block', 'quote', 'text-basic', 'button'],

                gridsCategory: `Marketing`,

                containerCategory: `Containers`,

                avanceCategory: `Avance`,

                btnStyles: btnStyle
        }, ...opts};

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);
});
