import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../pages/App.css';

class Character extends Component{
    render(){
        return (
            <li class="character">
                <p>
                    {this.props.characterDetails.name}
                </p>
            </li>
        );
    }

};

Character.propTypes = {
    characterDetails: PropTypes.object,
}

export default Character;