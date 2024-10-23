

window.addEventListener('DOMContentLoaded', function () {
    const kazkaDiv = document.querySelector('.kazka');

    if (kazkaDiv) {
        console.log('div kazka: ', kazkaDiv);
    } else {
        console.error('Элемент с классом .kazka не найден.');
        return;
    }

    const polishTextId = kazkaDiv.getAttribute('data-polish-id');
    const russianTextId = kazkaDiv.getAttribute('data-russian-id');

    console.log('Polish Text ID:', polishTextId);
    console.log('Russian Text ID:', russianTextId);

    const polishText = window[polishTextId];
    const russianText = window[russianTextId];

    console.log('Polish Text:', polishText);
    console.log('Russian Text:', russianText);

    if (!polishText || !russianText) {
        console.error('Не найдены массивы для польского или русского текста.');
        if (!polishText) {
            console.error('Польский массив не найден.');
        }
        if (!russianText) {
            console.error('Русский массив не найден.');
        }
        return;
    }

    polishText.forEach((polishSentence, index) => {
        const russianSentence = russianText[index];

        const flexDiv = document.createElement('div');
        flexDiv.classList.add('flex');

        const pPolish = document.createElement('p');
        pPolish.textContent = polishSentence;

        const hint2Container = document.createElement('div');
        hint2Container.classList.add('hint2-container', 'blockTranslation');

        // Добавляем обработчик событий
        hint2Container.addEventListener('click', function () {
            toggleHint2(this);
        });

        const hint2Header = document.createElement('div');
        hint2Header.classList.add('hint2-header');

        const hint2Content = document.createElement('div');
        hint2Content.classList.add('hint2-content');

        const pRussian = document.createElement('p');
        pRussian.textContent = russianSentence;

        hint2Content.appendChild(pRussian);
        hint2Container.appendChild(hint2Header);
        hint2Container.appendChild(hint2Content);

        flexDiv.appendChild(pPolish);
        flexDiv.appendChild(hint2Container);

        kazkaDiv.appendChild(flexDiv);
    });
});

// Функция для переключения видимости перевода
// function toggleHint2(element) {
//     element.classList.toggle('active'); // Переключаем класс active
// }