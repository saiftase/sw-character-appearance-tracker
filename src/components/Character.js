import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../pages/App.css';

class Character extends Component{
    render(){
        return (
            <li class="character" onClick={this.getMovies.bind(this)}>
                <p>
                    {this.props.characterDetails.name}
                </p>
            </li>
        );
    }

    getMovies(e){
        e.preventDefault();
        this.props.getMovies(this.props.characterDetails.name);
    }

};

Character.propTypes = {
    characterDetails: PropTypes.object,
    getMovies: PropTypes.func
}

export default Character;