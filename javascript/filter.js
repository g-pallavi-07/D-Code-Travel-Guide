const filterLinks = document.querySelectorAll('[data-filter]');
const places = document.querySelectorAll('.inner-atrractions-grid');

filterLinks.forEach(link => {
link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.getAttribute('data-filter');

    places.forEach(place => {
    const categories = place.getAttribute('data-category').split(' ');
    if (filter === 'all' || categories.includes(filter)) {
        place.style.display = 'flex'; // depends on your layout
    } else {
        place.style.display = 'none';
    }
    });
});
});
