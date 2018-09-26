import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      posts: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.postData();
    axios
      .post("/posts", {
        body: this.state.body
      })
      .then(response => {
        console.log(response);
        this.setState({
          posts: [...this.state.posts, response.data],
          body: ""
        });
      });
    this.setState({
      body: ""
    });
  }
  handleChange(e) {
    this.setState({
      body: e.target.value
    });
  }
  postData() {
    axios.post("/posts", {
      body: this.state.body
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Write something</div>

              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <textarea
                      onChange={this.handleChange}
                      className="form-control"
                      rows="5"
                      maxLength="140"
                      placeholder="Input text here"
                      required
                      value={this.state.body}
                    />
                  </div>
                  <input type="submit" value="Post" className="form-control" />
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Recent Tweets</div>

              <div className="card-body">
                {this.state.posts.map(post => (
                  <div key={post.id} className="media">
                    <div className="media-left">
                      <img
                        src={post.user.avatar}
                        className="media-object mr-2"
                      />
                    </div>
                    <div className="media=body">
                      <div className="user">
                        <a href={`/users/${post.user.username}`}>
                          <b>{post.user.username}</b>
                        </a>
                      </div>
                      <p>{post.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
