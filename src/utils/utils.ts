
export const getPages = (totalPages: number): Array<number> => {
    const array = []
    for (let i = 1; i <= totalPages; i++) {
        array.push(i)
    }
    return array
}

export const getPortion = (currentPage: number, portionSize: number): number => {
    const portion = Math.ceil(currentPage / portionSize)
    return portion
}

export const classNames = (...classes: Array<string>) => {
    return classes.join(' ')
}