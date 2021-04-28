import { listService } from '../service/list-service.js'
import { createNewLine } from '../model/create-line.js'
const table = document.querySelector('[data-table]')

const render = async () => {

    try {
        const data = await listService.mangaList()

        data.forEach(element => {
            table.appendChild(createNewLine(element.mangaName, element.status, element.en, element.ptbr, element.id))
        })
    } catch (err) {
        console.log(err)
    }

}

render()