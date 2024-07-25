// script.js
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function createGrid(size) {
    container.innerHTML = ''; // Clear existing grid

    // Calculate the size of each grid item based on the container size
    const itemSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
        container.appendChild(gridItem);
    }
}

resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter new grid size (maximum 100):'));
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

// Initialize default grid
createGrid(16);
