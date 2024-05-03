const characterForm = document.getElementById('character-form');
const charactersList = document.getElementById('characters-list');
const nameInput = document.getElementById('name');
const classInput = document.getElementById('class');

characterForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const charClass = classInput.value;

    if (name && charClass) {
        const character = document.createElement('div');
        character.classList.add('character');
        character.innerHTML = '<strong>' + name + '</strong> - ' + charClass + ' <button class="delete">Удалить</button>';

        charactersList.appendChild(character);

        nameInput.value = '';
        classInput.value = '';

        const deleteButton = character.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            charactersList.removeChild(character);
        });
    }
});