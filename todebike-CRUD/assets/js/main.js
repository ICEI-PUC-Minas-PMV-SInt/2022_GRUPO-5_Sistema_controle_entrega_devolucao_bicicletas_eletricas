'use strict'

const openModal = () => {
    document.getElementById('modal').classList.add('active')};
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

// CRUD

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_user')) ?? [];
const setLocalStorage = (dbUser) => (localStorage.setItem('db_user', JSON.stringify(dbUser)))

const createUser = (user) => {
    const dbUser = getLocalStorage();
    dbUser.push(user);
    setLocalStorage(dbUser);
}

const readUser = () => getLocalStorage();

const updateUser = (index, user) => {
    const dbUser = readUser();
    dbUser[index] = user;
    setLocalStorage(dbUser);
}

const deleteUser = (index) => {
    const dbUser = readUser();
    dbUser.splice(index, 1);
    setLocalStorage(dbUser);
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal__field');
    fields.forEach(field => field.value = "");
    document.getElementById('nome').dataset.index = 'new';
}

const saveUser = () => {
    if (isValidFields()) {
        const user = {
            id: document.getElementById('ID').value,
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            funcao: document.getElementById('funcao').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createUser(user);
            updateTable();
            closeModal();
        } else {
            updateUser(index, user);
            updateTable();
            closeModal();
        }
    }
}

const createRow = (user, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.nome}</td>
        <td>${user.email}</td>
        <td>${user.funcao}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableUser>tbody').appendChild(newRow);
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableUser>tbody tr');
    rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
    const dbUser = readUser();
    clearTable();
    dbUser.forEach(createRow);
}

const fillFields = (user) => {
    document.getElementById('ID').value = user.id
    document.getElementById('nome').value = user.nome
    document.getElementById('email').value = user.email
    document.getElementById('funcao').value = user.funcao
    document.getElementById('nome').dataset.index = user.index
}

const editUser = (index) => {
    const user = readUser()[index]
    user.index = index
    fillFields(user);
    openModal();
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editUser(index)
        } else {
            const user = readUser()[index]
            const response = confirm(`Deseja realmente excluir o usuário ${user.nome}`)
            if (response) {
                deleteUser(index);
                updateTable();
            }
        }
    }
}

updateTable();

// Eventos
document.getElementById('cadastrarUsuario').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveUser);
document.querySelector('#tableUser>tbody').addEventListener('click', editDelete);
document.getElementById('cancelar').addEventListener('click', closeModal);