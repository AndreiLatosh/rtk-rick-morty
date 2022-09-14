import React, {FC, useState} from 'react';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline'
import {classNames, getPages, getPortion} from "../utils/utils";

interface PaginationProps {
    totalPages: number,
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize?: number
}

const Pagination: FC<PaginationProps> = ({totalPages, onPageChanged, currentPage, portionSize = 10}) => {

    const [portion, setPortion] = useState<number>(getPortion(currentPage, portionSize))

    const pages = getPages(totalPages)

    const handlePrevClick = () => {
        setPortion((prevState) => prevState - 1)
    }

    const handleNextClick = () => {
        setPortion((prevState) => prevState + 1)
    }

    const portionCount = Math.ceil(totalPages / portionSize)
    const firstPortionPage = portionSize * (portion - 1) + 1
    const lastPortionPage = portion * portionSize

    return (
        <div className='flex'>
            <button
                disabled={portion === 1}
                onClick={handlePrevClick}
            >
                <ChevronLeftIcon className={classNames(portion === 1 ? 'text-gray-300' : 'text-blue-600', 'h-8 w-8')}/>
            </button>
            {pages
                .filter(page => page >= firstPortionPage && page <= lastPortionPage)
                .map((page, index) =>
                    <div
                        className={classNames(page === currentPage ? 'bg-blue-300 font-bold' : '',
                            'flex justify-center items-center w-10 h-10 border border-blue-600 px-2 py-1 mx-1 rounded-full text-medium cursor-pointer')}
                        key={index}
                        onClick={() => onPageChanged(page)}
                    >
                        <div>{page}</div>
                    </div>
                )}
            <button
                disabled={portion === portionCount}
                onClick={handleNextClick}
            >
                <ChevronRightIcon className={classNames(portion === portionCount ? 'text-gray-300' : 'text-blue-600', 'h-8 w-8')}/>
            </button>
        </div>
    );
};

export default Pagination;
