import { listService } from '../service/list-service.js'

export const createNewLine = (mangaName, status, en, ptbr, id) => {

    const newLine = document.createElement('tr')
    newLine.classList.add('main__table--row-info')

    const content = `
        <td class="main__table--data manga-name">${mangaName}</td>
        <td class="main__table--data">${status}</td>
        <td class="main__table--data">
            <div class="main__table--caps">
                ${en}
                <div class="main__table--buttons">
                    <button type="button"><i class="fas fa-minus"></i></button>
                    <button type="button"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </td>
        <td class="main__table--data">
            <div class="main__table--caps">
                ${ptbr}
                <div class="main__table--buttons">
                    <button type="button"><i class="fas fa-minus"></i></button>
                    <button type="button"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        </td>
        <td class="main__table--data">
            <ul class="main__table--options">
                <li><a href="../views/update.html?id=${id}"><i class="fas fa-edit"></i></a></li>
                <li><button class="button__delete" type="button"><i class="fas fa-trash"></i></button></li>
            </ul>
        </td>
    `
    newLine.innerHTML = content
    newLine.dataset.id = id
    return newLine
}

const table = document.querySelector('[data-table]')

table.addEventListener('click', async (event) => {
    let deleteButton = event.target.closest('button').classList == 'button__delete'

    if(deleteButton){

        try{
            const line = event.target.closest('[data-id]')
            console.log(line)
            let id = line.dataset.id
            console.log(id)
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
