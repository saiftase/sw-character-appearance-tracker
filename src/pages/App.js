import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Character from "../components/Character";

const mapStateToProps = function(state){
    return {
        loading: state.loading,
        characters: state.characters
    }
};

class App extends Component {
  render() {
    return (
      <div id="app">
          <h1>Characters</h1>
          {this.props.loading ? "Loading..." : ""}
          <ul id="characters">
              {this.props.characters.map(character =>
                                         <Character characterDetails={character}/>
              )}
          </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)