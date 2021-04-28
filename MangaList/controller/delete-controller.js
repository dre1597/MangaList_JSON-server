import { listService } from '../service/list-service.js'
const table = document.querySelector('[data-table]')

table.addEventListener('click', async (event) => {
    let deleteButton = event.target.closest('button').classList == 'button__delete'

    if(deleteButton){

        try{
            const line = event.target.closest('[data-id]')
            let id = line.dataset.id
            await listService.deleteManga(id)
            line.remove()
        }
        catch(err){
            console.log(err)
        }
    }
})