import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ICharacter, IResponse} from "../types/types";


export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://rickandmortyapi.com/api'}),
    tagTypes: ['Character'],
    endpoints: (build) => ({
        getCharacters: build.query<IResponse, number | void>({
            query: (page = 1) => ({
                url: '/character',
                params: {
                    page,
                }
            })
        }),
        getCharacterById: build.query<ICharacter, string>({
            query: (id) => ({
                url: `/character/${id}`
            })
        }),
        getCharactersByName: build.query<IResponse, {page: number | void, name: string}>({
            query: ({page = 1, name}) => ({
                url: '/character',
                params: {
                    page,
                    name,
                }
            })
        }),
    })
})

export const {useGetCharactersQuery, useGetCharacterByIdQuery, useGetCharactersByNameQuery} = rickAndMortyApi