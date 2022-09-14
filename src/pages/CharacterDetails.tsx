import React from 'react';
import {useParams} from "react-router-dom";
import {useGetCharacterByIdQuery} from "../services/RickAndMortyService";

const CharacterDetails = () => {

    const params = useParams()

    const {data: character} = useGetCharacterByIdQuery(params.id!)

    return (
        <>
            {character &&
                <div className='flex justify-evenly'>
                    <div className='ml-2'>
                        <img src={`${character.image}`} alt={`${character.name}`}/>
                    </div>
                    <div className='ml-2'>
                        <div className='text-3xl text-center'>{character.name}</div>
                        <div className='text-sm'>Status: {character.status} | Species: {character.species} | Gender: {character.gender}</div>
                        <div>Origin: {character.origin.name}</div>
                        <div>Location: {character.location.name}</div>
                    </div>
                </div>
            }
        </>
    );
};

export default CharacterDetails;