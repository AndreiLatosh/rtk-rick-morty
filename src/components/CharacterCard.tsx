import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {ICharacter} from "../types/types";

interface CharacterCardProps {
    character: ICharacter
}

const CharacterCard: FC<CharacterCardProps> = ({character}) => {
    return (
        <Link to={`/character/${character.id}`} className='m-2'>
            <img src={`${character.image}`} alt={`${character.name}`}/>
        </Link>
    );
};

export default CharacterCard;