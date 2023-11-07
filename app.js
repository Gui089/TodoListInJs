const formSearch = document.querySelector('.form-search');
const todosContainer = document.querySelector('.todos-container');


formSearch.addEventListener('submit', event => {
    event.preventDefault();

});

todosContainer.addEventListener('click', event => {
    const btnRemove = Array.from(event.target.classList);
    const listRemove = event.target;

    /* console.log(listRemove.parentElement);
    console.log(todosContainer.children); */

    if(btnRemove.includes('delete')) {
        listRemove.parentElement.classList.remove('d-flex');
        listRemove.parentElement.classList.add('d-none');
    }
});

