import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../pages/App.css';
import Button from '@material-ui/core/Button'

class Character extends Component{
    render(){
        return (
            <li class="character" onClick={this.getMovies.bind(this)}>
                <Button variant="contained" color="primary">
                    {this.props.characterDetails.name}
                </Button>
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