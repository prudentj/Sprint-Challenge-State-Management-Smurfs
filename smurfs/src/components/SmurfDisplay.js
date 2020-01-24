import React, { useReducer, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../contexts/AppContext';
import { reducer } from '../reducers/reducer';
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const SmurfDisplay = () => {
    const { appState, dispatch } = useContext(AppContext);
    useEffect(() => {
        console.log("status has changed", appState);
        const base_url = 'http://localhost:3333/smurfs'
        axios
            .get(base_url)
            .then(res => {
                console.log(res);
                dispatch({ type: 'UPDATE_STATE', payload: res.data })

            })
            .catch(err => console.log(err))
    }, []);
    //I will need to find a way to update this 
    return (
        <Container>
            <h1>Behold the Smurfs!</h1>
            {console.log('In Smurf display app state is', appState)}
            {appState.smurfs.map(el => (
                <Card>
                    <h2>{el.name}</h2>
                    <p>Age: {el.age}</p>
                    <p>Height: {el.height}</p>
                    <p>Tattoo Behind Ear: {el.id}</p>
                    <Button variant='contained' color='secondary' onClick={() => dispatch({ type: 'SEND_TO_GULAG', payload: el.id })}>Send To Gulag!</Button>
                </Card>
            ))}

        </Container>


    )
}

export default SmurfDisplay;
