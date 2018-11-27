import React, {Component} from 'react';
import './FamousPerson.css';


class FamousPerson extends Component {

    state = {
        FamousPerson: {
            name: '',
            role: ''
        }
    }

    handleClick = (event) => {
        console.log(this.state.FamousPerson);
    }
    
    handleChangeFor(PropertyName) {
        console.log('handleChangeFor called!');
        return (event) => {
            this.setState(
                {
                    FamousPerson: {
                        ...this.state.FamousPerson,
                        [PropertyName]: event.target.value
                    }
                }
            )
            
        }

    }

    render () {
        return (
            <div className='inputs'>
                <input type='text' onChange={this.handleChangeFor('name')} />
                <input type='text' onChange={this.handleChangeFor('role')} />
                <button onClick={this.handleClick}>Click Me</button>
                <p>"{this.state.FamousPerson.name}" is famous for: "{this.state.FamousPerson.role}".</p>
            </div >
        )
    }
}

export default FamousPerson;