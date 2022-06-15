'use strict'

const openModal = () => {
    document.getElementById('modal').classList.add('active')};
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

// CRUD

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_bike')) ?? [];
const setLocalStorage = (dbBike) => (localStorage.setItem('db_bike', JSON.stringify(dbBike)))

const createBike = (bike) => {
    const dbBike = getLocalStorage();
    dbBike.push(bike);
    setLocalStorage(dbBike);
}

const readBike = () => getLocalStorage();

const updateBike = (index, bike) => {
    const dbBike = readBike();
    dbBike[index] = bike;
    setLocalStorage(dbBike);
}

const deleteBike = (index) => {
    const dbBike = readBike();
    dbBike.splice(index, 1);
    setLocalStorage(dbBike);
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal__field');
    fields.forEach(field => field.value = "");
    document.getElementById('modelo').dataset.index = "new";
}

const saveBike = () => {
    if (isValidFields()) {
        const bike = {
            id: document.getElementById('ID').value,
            modelo: document.getElementById('modelo').value,
            ano: document.getElementById('ano').value,
            estacao: document.getElementById('estacao').value
        }
        const index = document.getElementById('modelo').dataset.index
        if (index == 'new') {
            createBike(bike);
            updateTable();
            closeModal();
        } else {
            updateBike(index, bike);
            updateTable();
            closeModal();
        }
    }
}

const createRow = (bike, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${bike.id}</td>
        <td>${bike.modelo}</td>
        <td>${bike.ano}</td>
        <td>${bike.estacao}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableBike>tbody').appendChild(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableBike>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
    const dbBike = readBike();
    clearTable();
    dbBike.forEach(createRow);
}

const fillFields = (bike) => {
    document.getElementById('ID').value = bike.id
    document.getElementById('modelo').value = bike.modelo
    document.getElementById('ano').value = bike.ano
    document.getElementById('estacao').value = bike.estacao
}

const editBike = (index) => {
    const bike = readBike()[index]
    bike.index = index
    fillFields(bike)
    openModal();
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editBike(index)
        } else {
            const bike = readBike()[index]
            const response = confirm(`Deseja realmente excluir a bicicleta ${bike.id}`)
            if (response) {
                deleteBike(index);
                updateTable();
            }
        }
    }
}

updateTable();

// Eventos
document.getElementById('cadastrarBike').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveBike);
document.querySelector('#tableBike>tbody').addEventListener('click', editDelete);
document.getElementById('cancelar').addEventListener('click', closeModal);