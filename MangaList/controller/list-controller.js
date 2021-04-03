import { listService } from '../service/list-service.js'

export const createNewLine = (mangaName, status, en, ptbr, id) => {

    const newLine = document.createElement('tr')
    newLine.classList.add('main__table--row-info')

    const content = `
        <td class="main__table--data manga-name">${mangaName}</td>
        <td class="main__table--data">${status}</td>
        <td class="main__table--data">${en}</td>
        <td class="main__table--data">${ptbr}</td>
        <td class="main__table--data">
            <ul>
                <li><a href="../views/update.html?id=${id}">Update</a></li>
            </ul>
        </td>
        <td class="main__table--data">
            <ul>
                <li><button class="button__delete" type="button" data-delete>Delete</button></li>
            </ul>
        </td>
    `
    
    newLine.innerHTML = content
    newLine.dataset.id = id
    return newLine
}

const table = document.querySelector('[data-table]')

table.addEventListener('click', async (event) => {
    let deleteButton = event.target.className == 'button__delete'

    if(deleteButton){

        try{
            const line = event.target.closest('[data-id]')
            let id = line.dataset.id
            await listService.deleteManga(id)
            line.remove()
        }
        catch(err){
            console.log(err)
            window.location.href = "../views/error.html"
        }

    }
})

const render = async () => {

    try{
        const data = await listService.mangaList()

        data.forEach(element => {
            table.appendChild(createNewLine(element.mangaName, element.status, element.en, element.ptbr, element.id))
        })
    }
    catch(err){
        window.location.href = "../views/error.html"
        console.log(err)
    }
    
}

render()
