import { listService } from '../service/list-service.js';

const form = document.querySelector('[data-form]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const name = event.target.querySelector('[data-name]').value;
    const status = event.target.querySelector('[data-status]').value;
    const en = event.target.querySelector('[data-en]').value;
    const ptbr = event.target.querySelector('[data-ptbr]').value;

    await listService.addManga(name, status, en, ptbr);
    window.location.href = '../views/list.html';
  } catch (err) {
    console.log(err);
  }
});
