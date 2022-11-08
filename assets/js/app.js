// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.






/*CDN da utilizzare 
https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js)*/

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            axios: ('https://flynn.boolean.careers/exercises/api/random/mail')
        }
    },
    mounthed() {
        this.axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    }
}).mount('#app')

// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then(function (response) {

//         console.log(response);
//     })
//     .catch(function (error) {

//         console.log(error);
//     })
//     .then(function () {

//     });




