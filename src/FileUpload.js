import React from "react";
import { Component } from "react";
import axios from "axios";
import "./FileUpload.css";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:8088/fileUpload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form method="post" action="#" id="#">
              <div class="form-group files">
                <label>Upload Configuration File(s)</label>
                <input
                  type="file"
                  className="form-control"
                  multiple=""
                  onChange={this.onChangeHandler}
                />
                <button
                  type="button"
                  class="btn btn-success btn-block"
                  onClick={this.onClickHandler}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
