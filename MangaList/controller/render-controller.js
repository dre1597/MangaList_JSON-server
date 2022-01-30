import { listService } from '../service/list-service.js';
import { createNewLine } from '../model/create-line.js';
import { deleteListener } from '../controller/delete-controller.js';
import { plusMinusListener } from './plusMinus-controller.js';

const table = document.querySelector('[data-table]');

const render = async () => {
  try {
    const data = await listService.mangaList();

    data.forEach((element) => {
      table.appendChild(
        createNewLine(
          element.mangaName,
          element.status,
          element.en,
          element.ptbr,
          element.id
        )
      );
    });

    deleteListener();
    plusMinusListener();
  } catch (err) {
    console.log(err);
  }
};

render();
