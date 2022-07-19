const users = [{
    username: "lando12",
    jedi: false
}, {
    username: "kvaigon99",
    jedi: true
}, {
    username: "anakin skywalker",
    jedi: false // DARK SIDE ISN'T JEDI WAY!!!
}, {
    username: "littlegreenpug",
    jedi: true
}, {
    username: "ray",
    jedi: true
}, {
    username: "padmebestqueenever",
    jedi: false
}];

//количество джедаев

// const countJedi = (users) => {
//         return users.reduce( (count, user) => {
//                 if(user.jedi){
//                    count = count+1
//                 };
//                 return count
//         }   ,   0 )
// }


// console.log(countJedi(users));


//массив с именами джедаев

// const getArrayOnlyJedi = (users) => {
//     return users.reduce((names, user) => {
//         if( user.jedi) {
//              names.push(user.username)
//         }; 
        
//         return names;
//     } , []   )
// }



// console.log(getArrayOnlyJedi(users))





const documents = [{
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07"
}, {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11"
}, {
    content: "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56"
}];

const compDoc =(documents) => {
        return documents.reduce((generalDoc, document) => {
            generalDoc.content =  generalDoc.content + ' ' + document.content
            generalDoc.author.push(document.author)
            if(!generalDoc.date || new Date(generalDoc.date <= new Date(document.date))){
                generalDoc.date = document.date
            }
            return generalDoc;
        }, {
            content: '',
            author: [],
            date: null
        }  )
}

console.log(compDoc(documents));