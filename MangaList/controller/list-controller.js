import { listService } from '../service/list-service.js'

export const createNewLine = (mangaName, status, en, ptbr, id) => {
    const newLine = document.createElement('tr')
    const content = `
        <td>${mangaName}</td>
        <td>${status}</td>
        <td>
            <ul class="flex">
                <li>${en}</li>
                <li class="button__li"><button class="button__plusone" data-plusone>+1</button></li>
            </ul> 
        </td>
        <td>
            <ul class="flex">
                <li>${ptbr}</li>
                <li class="button__li"><button class="button__plusone" data-plusone>+1</button></li>
            </ul>  
        </td>
        <td>
            <ul>
                <li><a href="../views/update.html?id=${id}">Update</a></li>
            </ul>
        </td>
        <td>
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
        console.log(err)
        window.location.href = "../views/error.html"
    }
    
}

render()
