import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Character from "../components/Character";
import Movie from "../components/Movie";

const mapStateToProps = function(state){
    return {
        loading: state.loading,
        characters: state.characters,
        movies: state.movies,
        errors: state.errors,
    }
};

const mapDispatchToProps = function(dispatch){
    return {
        getMovies: character => dispatch({type: 'GET_MOVIES', character: character}),
    }
}

class App extends Component {
  render() {
    return (
      <div id="app">
          <h1>Characters</h1>
          {this.props.loading ? "Loading..." : ""}
          <ul id="characters">
              {this.props.characters.map(character =>
                                         <Character
                                             characterDetails={character}
                                             getMovies={this.props.getMovies}
                                         />
              )}
          </ul>

          { !this.props.errors && this.props.movies.movies && this.props.movies.movies.length > 0 &&
            <div>
                <h1>Movies featuring {this.props.movies.character} </h1>
                <ul id="movies">
                    {this.props.movies.movies.map(movie => <Movie movieDetails={movie} />)}
                </ul>
            </div>
          }

          {this.props.errors &&
            <p>An error has occurred.</p>
          }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)