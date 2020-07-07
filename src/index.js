import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const movie = {
  title: "Avengers: Infinity War",
  vote_avarage: 8.5,
  image: "https://image.tmdb.org/t/p/w500/b0GkgRGdhrBYJSLpXaxhXVstddV.jpg",
  overview:
    "AS the Avengers and their allies have continues to protect the world from threats"
};

function Image({ src, alt }) {
  return <img src={src} alt={alt} width="100%" />;
}

class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }
  toggleOverviw = () => {
    this.setState({
      show: !this.state.show
    });
  };
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };
  render() {
    const {
      data: { title, vote_avarage, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>

        <p>{vote_avarage}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverviw}>
            {this.state.show ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
          >
            Like
          </button>
        </div>

        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
