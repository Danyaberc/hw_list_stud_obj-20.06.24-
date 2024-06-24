let elName = document.querySelector('input[name="userName"]');
let elSurName = document.querySelector('input[name="surName"]');
let elLastName = document.querySelector('input[name="lastName"]');
let elAdress = document.querySelector('input[name="adress"]');
let elGender = document.querySelector('.gender');
let elAge = document.querySelector('input[name="age"]');

let btnAdd = document.querySelector('.sbm');
let btnSortName = document.querySelector('.sortname')
let btnSortSurname = document.querySelector('.sortsurname')
let btnSortGender = document.querySelector('.sortgender')

let elMsgList = document.querySelector('.list_stud')
let errDiv = document.querySelector('.errDiv')

let listStud = []; // Начинаем с пустого массива

let ageUser = () => {

    let dateToday = new Date();

    let dateUser = new Date(elAge.value);

    let resultAge = dateToday.getFullYear() - dateUser.getFullYear()

    console.log(resultAge)

    return resultAge
}

btnAdd.addEventListener('click', (ev) => {
    ev.preventDefault()

    let newStudent = {
        id: listStud.length + 1,
        name: elName.value,
        surname: elSurName.value,
        lastname: elLastName.value,
        adress: elAdress.value,
        gender: elGender.value,
        age: ageUser(),
    }

    if (elName.value === '' || elSurName.value === '' || elLastName.value === '' || elAdress.value === '' ||
        elGender.value === NaN || elAge.value === NaN) {
        errDiv.innerHTML = 'Всі інпути повинні бути заповнені'
        return
    }

    elName.value = '';
    elSurName.value = '';
    elLastName.value = '';
    elGender.value = '';
    elAdress.value = '';
    elAge.value = '';

    errDiv.innerHTML = ''

    listStud.push(newStudent)

    elMsgList.innerHTML = ''

    listStud.forEach(item => {
        let befSrtListRender = document.createElement('div')

        befSrtListRender.innerHTML =

        `
        'Дані отримано:' 
        ${item.name} 
        ${item.surname} 
        ${item.lastname}
        ${item.gender}
        ${item.adress}
        ${item.age}
        `

        elMsgList.append(befSrtListRender)
    })

    console.log('liststuduntilsort', listStud)

})

let sortStudName = () => {

    listStud.sort((a, b) => {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })

}

let sortStudSurname = () => {
    listStud.sort((a, b) => {
        if (a.surname < b.surname) {
            return -1
        }
        if (a.surname > b.surname) {
            return 1
        }
        return 0
    })
}

let sortGender = () => {
    listStud.sort((a, b) => {
        if (a.gender < b.gender) {
            return -1
        }
        if (a.gender > b.gender) {
            return 1
        }
        return 0
    })
}


let renderList = () => {
    elMsgList.innerHTML = '';
    
    listStud.forEach(item => {
        let studRender = document.createElement('div')
        studRender.innerHTML = `
        ${item.name} 
        ${' '} 
        ${item.surname} 
        ${' '} 
        ${item.lastname} 
        ${' '}
        ${item.adress}
        ${' '}
        ${item.gender} 
        ${' '}
        ${item.age}`
        elMsgList.append(studRender)
    })

}

btnSortName.addEventListener('click', (ev) => {
    ev.preventDefault();

    sortStudName()

    renderList()
})

btnSortSurname.addEventListener('click', (ev) => {
    ev.preventDefault();

    sortStudSurname()

    renderList()
})

btnSortGender.addEventListener('click', (ev) => {
    ev.preventDefault();

    sortGender();

    renderList();
})




















// addButton.addEventListener('click', () => {
//     let newStudent = {
//         id: listStud.length + 1, // автоинкремент id
//         name: elName.value,
//         surname: elSurName.value,
//         lastname: elLastName.value,
//         address: elAdress.value,
//         gender: elGender.value,
//         age: parseInt(elAge.value) // преобразование возраста в число
//     };

//     listStud.push(newStudent); // Добавляем новый объект в массив

//     // очистка полей ввода
//     elName.value = '';
//     elSurName.value = '';
//     elLastName.value = '';
//     elAdress.value = '';
//     elGender.value = '';
//     elAge.value = '';

//     console.log(listStud); // Выводим массив студентов в консоль
// });








