import React, {FC, useState} from 'react';
import {useGetCharactersByNameQuery} from "../services/RickAndMortyService";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import {useDebounce} from "react-use";

interface HomeProps {
    search: string
}

const Home: FC<HomeProps> = ({search}) => {

    const [debouncedSearch, setDebouncedSearch] = useState<string>(localStorage.getItem('currentSearch') ?? '')
    const [page, setPage] = useState<number>(Number(localStorage.getItem('currentPage') ?? 1))

    const {data: characters, error, isFetching} = useGetCharactersByNameQuery({page, name: debouncedSearch})

    const onPageChanged = (page: number) => {
        setPage(page)
        localStorage.setItem('currentPage', String(page))
    }

    const [] = useDebounce(() => {
            if (search !== debouncedSearch) {
                setPage(1)
                localStorage.setItem('currentPage', '1')
            }
            setDebouncedSearch(search)
            localStorage.setItem('currentSearch', search)
        },
        1000,
        [search]
    );

    return (
        <div>
            {error && <div className='text-3xl text-center'>No data found...</div>}

            {!error && !isFetching && characters &&
                <Pagination
                    currentPage={page}
                    totalPages={characters.info.pages}
                    onPageChanged={onPageChanged}
                />}

            {isFetching && <div className='text-3xl text-center'>Loading...</div>}

            {!error && !isFetching &&
                <div className='flex flex-wrap justify-center'>
                    {characters?.results.map(res =>
                        <CharacterCard key={res.id} character={res}/>
                    )}
                </div>
            }


        </div>
    );
};

export default Home;