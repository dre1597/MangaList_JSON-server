import { listService } from '../service/list-service.js'
import { createNewLine } from './list-controller.js'

const searchArea = document.querySelector('[data-search]')
const table = document.querySelector('[data-table]')

searchArea.addEventListener('keyup', async (event) => {

    event.preventDefault()
    const text = event.target.value

    const data = await listService.mangaList()

    const FilterPlusFor = () =>{

        var saveNames = []

        const filtered = data.filter( element => {

            const name = element.mangaName.toLowerCase()
    
            if(saveNames.includes(name))
                return false
    
            saveNames.push(name)
            
            return name.includes(text)
    
        })
    
        filtered.forEach(element => {
            
            table.appendChild(createNewLine(element.mangaName, element.status, element.en, element.ptbr, element.id))
        })
    }

    FilterPlusFor()
})