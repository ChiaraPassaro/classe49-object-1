// const user = {
//   name: 'pippo',
//   age: 30,
//   hairs: 'brown',
//   visible: false
// };

// console.log(user.name);
// console.log(user['age']);

// user.weight = 70;
// user.age += 20;
// console.log(user);

// const key = 'name';
// user[key]
// const container = document.getElementById('container');

// for (const key in user) {
//   console.log(key); //name, age..
//   console.log(user[key]); //pippo, 30 ..
//   container.innerHTML += `Chiave ${key}, Valore: ${user[key]}`;
// }

// const array = [1, 2, 3, 5];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }



// console.log(); //user['name']

const book = {
  pagine: 300,
  autore: 'Pippo',
  titolo: 'Questo e un titolo',
  genere: 'thriller',
  editore: 'Editore di Pippo',
  copertina: 'rigida'
}

// const div = `
//   <div>
//     <h2>${book.titolo}</h2>
//     <h3>${book.autore}</h3>
//     <small>${book.genere}</small>
//   </div>
// `;

// container.innerHTML += div;
// const list = document.getElementById('list');

// for (let chiave in book) {
//   const element = book[chiave];

//   list.innerHTML += `<li>${chiave} <br> ${element} </li>`
// }


// const classi = [
//   ['Marco', 'Giulia'],
//   ['Ludovica', 'Nando'],
// ];

// console.log(classi[1]);

// const classe2 = classi[1];
// console.log(classe2[0]) //Ludovica

// console.log(classi[1][0]) //Ludovica


const classiArrObj = [
  {
    name: 'Classe 1',
    students: ['Marco', 'Giulia'],
  },
  {
    name: 'Classe 2',
    students: ['Ludovica', 'Giulio'],
    color: 'blue'
  },
  {
    name: 'Classe 3',
    students: ['Mario', 'Francesco'],
  },
];

// const classe3 = classiArrObj[2];
// console.log(classiArrObj[2].name);
// console.log(classiArrObj[2]['name']);
// console.log(classe3.name);

// const objArray = {
//   'classe1': ['Marco', 'Giulia'],
//   'classe2': ['Marco', 'Giulia'],
//   'classe3': ['Marco', 'Giulia'],
// }

// for (let index = 0; index < classiArrObj.length; index++) {
//   const element = classiArrObj[index];
//   // console.log(element);
//   // console.log(element.students);
//   // array
//   // const arrayStudents = element.students;
//   // for (let i = 0; i < arrayStudents.length; i++) {
//   //   const student = arrayStudents[i];
//   //   console.log(student);
//   // }

//   for (const key in element) {
//     const elementObj = element[key];
//     console.log(elementObj);
//   }
// }

// const newClass = {
//   name: 'Classe 4',
//   students: ['Filippo', 'Francesca'],
// };

// newClass.maxStudents = 36;


// classiArrObj.push(
//   // {
//   //   name: 'Classe 4',
//   //   students: ['Filippo', 'Francesca'],
//   // }
//   newClass
// );

// console.log(classiArrObj);

// const list = document.getElementById('list');
// list.nuovaProp = 'test';
// console.dir(list.nuovaProp);

//funzione che stampa le card
function printCards(array, container) {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];

    const templateDiv = `
      <div class="card">
        <h1>${obj.name}</h1>
        <h2>${obj.teacher}</h2>
        <img src="img/${obj.img}" alt="">
        <a href="#">Scopri di piu</a>
      </div>`;

    container.innerHTML += templateDiv;
  }
}

//array delle classi
const classiArrObj2 = [
  {
    name: 'Classe 1',
    teacher: 'Chiara',
    img: 'Thinking-of-getting-a-cat.png'
  },
  {
    name: 'Classe 2',
    teacher: 'Simone',
    img: 'Thinking-of-getting-a-cat.png'
  },
  {
    name: 'Classe 3',
    teacher: 'Marco',
    img: 'Thinking-of-getting-a-cat.png'
  },
];

//stampo tutte le card
const container = document.querySelector('.cards');
printCards(classiArrObj2, container);
// for (let i = 0; i < classiArrObj2.length; i++) {
//   const obj = classiArrObj2[i];

//   const templateDiv = `
//   <div class="card">
//     <h1>${obj.name}</h1>
//     <h2>${obj.teacher}</h2>
//     <a href="#">Scopri di piu</a>
//   </div>`;

//   container.innerHTML += templateDiv;


// }


//prendo elementi form dal dom
const inputClass = document.getElementById('class');
const inputTeacher = document.getElementById('teacher');
const inputImg = document.getElementById('img');
const button = document.getElementById('addClass');

button.addEventListener('click', function (event) {
  event.preventDefault(); //previene il refresh della pagina in un form

  //prendiamo dati inseriti dall'utente
  const nameClass = inputClass.value;
  const nameTeacher = inputTeacher.value;
  const nameImg = inputImg.value;

  if (nameClass.length > 0 && nameTeacher.length > 0) {
    //se ha inserito effettivamente qualcosa
    const obj = {
      name: nameClass,
      teacher: nameTeacher,
      img: nameImg
    };
    // console.log(obj);
    //pushamo obj nuoco
    classiArrObj2.push(obj);

    //ristampiamo tutte le cards
    const container = document.querySelector('.cards');
    printCards(classiArrObj2, container);
    // const templateDiv = `
    //   <div class="card">
    //     <h1>${obj.name}</h1>
    //     <h2>${obj.teacher}</h2>
    //     <a href="#">Scopri di piu</a>
    //   </div>`;

    // container.innerHTML += templateDiv;
    // console.log(classiArrObj2);
  } else {
    console.log('non hai inserito dei dati');
  }
});
