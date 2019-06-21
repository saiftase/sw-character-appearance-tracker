import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../pages/App.css';

class Movie extends Component{
    render(){
        return (
            <li class="movie">
                <p><b>{this.props.movieDetails.title}</b></p>
                <p>{this.props.movieDetails.releaseDate}</p>
            </li>
        );
    }


};

Movie.propTypes = {
    movieDetails: PropTypes.object,
}

export default Movie;