import { listService } from '../service/list-service.js';

export const plusMinusListener = () => {
  const plusBtns = document.querySelectorAll('.button__plus');
  const minusBtns = document.querySelectorAll('.button__minus');

  plusBtns.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const value = event.currentTarget.parentNode.parentNode;
      const id = value.parentNode.parentNode.dataset.id;
      const en = value.parentNode.classList.contains('en');
      const ptbr = value.parentNode.classList.contains('ptbr');

      const data = await listService.detailsManga(id);

      let newEn = data.en;
      let newPtbr = data.ptbr;

      if (en) newEn++;
      else if (ptbr) newPtbr++;

      await listService.updateManga(
        id,
        data.mangaName,
        data.status,
        newEn,
        newPtbr
      );
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener('click', async (event) => {
      const value = event.currentTarget.parentNode.parentNode;
      const id = value.parentNode.parentNode.dataset.id;
      const en = value.parentNode.classList.contains('en');
      const ptbr = value.parentNode.classList.contains('ptbr');

      const data = await listService.detailsManga(id);

      let newEn = data.en;
      let newPtbr = data.ptbr;

      if (en) newEn--;
      else if (ptbr) newPtbr--;

      await listService.updateManga(
        id,
        data.mangaName,
        data.status,
        newEn,
        newPtbr
      );
    });
  });
};
