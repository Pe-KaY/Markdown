import { Component } from "react"
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"
import "../src/styles/App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      editor: true,
      previewer: true,
    }
    this.handleInput = this.handleInput.bind(this)
    this.fullEditor = this.fullEditor.bind(this)
    this.fullPreview = this.fullPreview.bind(this)
  }
  // handleinputMethod
  handleInput(event) {
    this.setState({
      input: event.target.value,
      editor: true,
      previewer: true,
    })
  }
  fullPreview() {
    this.setState((ps) => ({
      editor: !ps.editor,
    }))
  }
  fullEditor() {
    this.setState((ps) => ({
      previewer: !ps.previewer,
    }))
  }

  componentDidMount() {
    const string =
      "# Welcome to my React Markdown Previewer <br>       Enter or paste text above to edit"
    document.getElementById("preview").innerHTML = marked.parse(string)
  }
  render() {
    return (
      <div id="container">
        <div
          id="textarea_container"
          className={this.state.editor ? "none" : "close"}
          style={{ height: this.state.previewer ? "16rem" : "100vh" }}
        >
          <div className="textarea-header jersey-20-regular">
            <span className="header__left">
              <i className="fa-solid fa-pen-to-square"></i>
              <p>Editor</p>
            </span>
            <span className="header__right">
              <img
                src="src/assets/down-left-and-up-right-to-center-solid.svg"
                className={this.state.previewer ? "hide" : "mini"}
                onClick={this.fullEditor}
              />
              <i
                className={
                  this.state.previewer
                    ? "fa-solid fa-up-down-left-right"
                    : "hide"
                }
                onClick={this.fullEditor}
              ></i>
            </span>
          </div>
          <textarea
            className="josefin-sans"
            id="editor"
            cols="30"
            rows="10"
            onChange={this.handleInput}
          ></textarea>
        </div>
        <div
          id="previewContainer"
          className={this.state.previewer ? "none" : "close"}
          style={{ minHeight: this.state.editor ? "16rem" : "100vh" }}
        >
          <div className="textarea-header jersey-20-regular">
            <span className="header__left">
              <i className="fa-solid fa-eye"></i>
              <p>Previewer</p>
            </span>
            <span className="header__right">
              <img
                src="src/assets/down-left-and-up-right-to-center-solid.svg"
                className={this.state.editor ? "hide" : "mini"}
                onClick={this.fullPreview}
              />
              <i
                className={
                  this.state.editor ? "fa-solid fa-up-down-left-right" : "hide"
                }
                onClick={this.fullPreview}
              ></i>
            </span>
          </div>
          <div
            id="preview"
            className="josefin-sans"
            dangerouslySetInnerHTML={{ __html: marked.parse(this.state.input) }}
          ></div>
        </div>
      </div>
    )
  }
}

export default App
