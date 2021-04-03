import { listService } from '../service/list-service.js'


const table = document.querySelector('[data-table]')


table.addEventListener('click', async (event) => {

    let type, id
    
    [type, id] = event.target.name.split('-')
    
    const data = await listService.detailsManga(id)

    let newEn = data.en
    let newPtbr = data.ptbr

    if(type == 'en') newEn ++
    else if(type == 'ptbr') newPtbr ++

    await listService.updateManga(id, data.mangaName, data.status, newEn, newPtbr)

    
})

