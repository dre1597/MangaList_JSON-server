import { listService } from '../service/list-service.js'

export const deleteListener = () => {
    const deleteBtns = document.querySelectorAll('.button__delete')
    
    deleteBtns.forEach( (btn) => {
        btn.addEventListener('click', async (event) => {
            try{
                const line = event.target.closest('[data-id]')
                let id = line.dataset.id
                await listService.deleteManga(id)
                line.remove()   
            }
            catch(err){
                console.log(err)
            }
        })
    })
}