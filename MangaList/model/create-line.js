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
                    <button type="button"><i class="fas fa-minus" class="button__minus"></i></button>
                    <button type="button"><i class="fas fa-plus" class="button__plus"></i></button>
                </div>
            </div>
        </td>
        <td class="main__table--data">
            <div class="main__table--caps">
                ${ptbr}
                <div class="main__table--buttons">
                    <button type="button" class="button__minus"><i class="fas fa-minus"></i></button>
                    <button type="button" class="button__plus"><i class="fas fa-plus"></i></button>
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

