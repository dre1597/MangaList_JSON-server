const searchArea = document.querySelector('[data-search]')


searchArea.addEventListener('keyup', (event) => {
    
    const text = event.target.value.toLowerCase() 

    const tr = document.getElementsByClassName('tr-info') 

    for(let i = 0 ; i < tr.length ; i++) {

        tr[i].classList.remove('hidden')

        let mangaName = tr[i].getElementsByClassName('manga-name').item(0).textContent.toLowerCase()

        if(!mangaName.includes(text)) tr[i].classList.add('hidden')
    }
})