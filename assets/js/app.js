// Descrizione:
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.






/*CDN da utilizzare nell head dell documento html IMPORTANTE: va aggiunto l'attributo defer
https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js)*/
const emailsList = []
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            email: null,
            emailsList
        }
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    // console.log(response.data.response);
                    this.email = response.data.response
                    this.emailsList.push(this.email)
                });
        }
    }
}).mount('#app')

//dovro utilizzare un ciclo for del tipo
/*
*/



