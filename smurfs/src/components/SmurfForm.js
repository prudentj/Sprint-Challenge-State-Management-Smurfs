import React, { useReducer, useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';

//material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const SmurfForm = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    const { appState, dispatch } = useContext(AppContext);

    const handleNameChanges = el => {
        setName(el.target.value);
    };
    const handleAgeChanges = el => {
        setAge(el.target.value);
    };
    const handleHeightChanges = el => {
        setHeight(el.target.value);
    };

    const handleSubmit = el => {
        el.preventDefault();
        console.log('Submitted Items', {
            name: name,
            age: age,
            height: `${height} cm`,
            id: Date.now()
        });
        const base_url = 'http://localhost:3333/smurfs';
        axios
            .post(base_url, {
                name: name,
                age: age,
                height: `${height} cm`
            })
            .then(res => {
                console.log(res);
                dispatch({ type: 'UPDATE_STATE', payload: res.data })

            })
            .catch(err => console.log(err))
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                //PAYLOAD GOES HERE
            }
        })
        setName('')
        setAge('')
        setHeight('')
        console.log(appState)
    };

    return (
        <Container>
            <form onSubmit={el => handleSubmit(el)}>
                <TextField
                    id="SmurfName"
                    label="Smurf Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChanges}
                />
                <TextField
                    id="SmurfAge"
                    label="Smurf Age"
                    variant="outlined"
                    value={age}
                    onChange={handleAgeChanges}
                />
                <TextField
                    id="SmurfHeight"
                    label="Smurf Height in cm"
                    variant="outlined"
                    value={height}
                    onChange={handleHeightChanges}
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </Container>
    );
}
export default SmurfForm;