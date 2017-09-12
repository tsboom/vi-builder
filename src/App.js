import React from 'react';
import './App.css';
import './RichEditor.css';
// import HelloWorldList from './HelloWorldList';
import RichEditorExample from './RichEditor';

import {Editor, EditorState, RichUtils} from 'draft-js';

// const App = () => {
//   return (
//     <div className="App">
//       <HelloWorldList />
//     </div>
//   );
// };


this.state = {editorState: EditorState.createEmpty()};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  _onBoldClick() {
      this.onChange(RichUtils.toggleInlineStyle(
        this.state.editorState,
        'BOLD'
      ));
    }

  _onItalicClick() {
      this.onChange(RichUtils.toggleInlineStyle(
        this.state.editorState,
        'ITALIC'
      ));
    }


  render() {
    return (
    <div id="content">
      <h1>Draft.js Editor</h1>
      <button onClick={this._onBoldClick.bind(this)}>Bold</button>
      <div className="editor">
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    </div>
  );
  }
}






// export default App;
