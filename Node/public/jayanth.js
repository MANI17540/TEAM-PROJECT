const compareButtons = document.querySelectorAll('.compareButton');
const selectedLaptopsList = document.getElementById('selectedLaptops');

compareButtons.forEach(button => {
    button.addEventListener('click', () => {
        const laptopArticle = button.closest('.laptop');
        const laptopName = laptopArticle.querySelector('h2').textContent;
        const listItem = document.createElement('li');
        listItem.textContent = laptopName;
        selectedLaptopsList.appendChild(listItem);
    });
});
