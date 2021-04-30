const mangaList = () => {
    return fetch(`http://localhost:3000/mangaJSON`)
    .then(response => {

        if(response.ok) return response.json()
        throw new Error('Can\'t find manga list.')

    })
        
}

const addManga = (mangaName, status, en, ptbr) => {

    return fetch(`http://localhost:3000/mangaJSON`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ 
            mangaName,
            status,
            en,
            ptbr
        }) 
    })
    .then(response => {

        if(response.ok) return response.body 
        throw new Error('Can\'t add manga on list.')

    })

}

const deleteManga = (id) => {
    return fetch(`http://localhost:3000/mangaJSON/${id}`, {
        method: 'DELETE',  
    })
    .then( response => {

        if(!response.ok) throw new Error('Can\'t delete this manga from the list.')

    })

}

const detailsManga = (id) => {

    return fetch(`http://localhost:3000/mangaJSON/${id}`)
    .then(response => {

        if(response.ok) return response.json()
        throw new Error('Can\'t detail the list.')

    })

}

const updateManga = (id, mangaName, status, en, ptbr) => {

    return fetch(`http://localhost:3000/mangaJSON/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            mangaName,
            status,
            en,
            ptbr
        })
    })
    .then(response => {
        if(response.ok) return response.json()
        throw new Error('Can\'t update the manga.')

    })

}

export const listService = {
    mangaList, 
    addManga,
    deleteManga,
    detailsManga,
    updateManga
}