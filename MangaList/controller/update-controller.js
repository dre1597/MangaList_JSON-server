import { listService } from '../service/list-service.js'

( async () => {
    
    const url = new URL(window.location)
    
    const id = url.searchParams.get('id')
    
    const inputName = document.querySelector('[data-name]')
    const inputStatus = document.querySelector('[data-status]')
    const inputEn = document.querySelector('[data-en]')
    const inputPtbr = document.querySelector('[data-ptbr]')

    try{
        const data = await listService.detailsManga(id)

        inputName.value = data.mangaName
        inputStatus.value = data.status
        inputEn.value = data.en
        inputPtbr.value = data.ptbr
    }
    catch(err){
        console.log(err)
        window.location.href = "../views/error.html"
    }

    const form = document.querySelector('[data-form]')
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        try{
            await listService.updateManga(id, inputName.value, inputStatus.value, inputEn.value, inputPtbr.value)
            window.location.href = "../views/list.html"
        }
        catch(err){
            console.log(err)
            window.location.href = "../views/error.html"
        } 
    })
})()
