const books = document.querySelectorAll('.books');

const configureOverlay = () =>
{
    let i = books.length;
    books.forEach((e) => {
        e.style.zIndex = i;
        i--;
    });
}
configureOverlay();

books.forEach((e) =>
{
    e.addEventListener('click', () => { 
        e.classList.toggle('zoom');
        e.classList.toggle('booksHover');
    });
});