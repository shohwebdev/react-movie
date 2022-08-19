import React from "react";
export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (e) => {
    this.setState(() => ({ type: e.target.dataset.type }),() => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    )
  };
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field d-flex">
            <input
              type="search"
              placeholder="Search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn btn-primary search-btn"
              onClick={() => this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="type"
                className="with-gap"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                className="with-gap"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                type="radio"
                name="type"
                className="with-gap"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
