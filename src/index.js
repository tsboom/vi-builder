import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import RichEditorExample from './RichEditor';
import LinkEditorExample from './LinkEditorExample';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<RichEditorExample />, document.getElementById('root'));

// ReactDOM.render(<LinkEditorExample />, document.getElementById('root'));


registerServiceWorker();
