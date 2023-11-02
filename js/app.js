console.log('hello')

const { createApp } = Vue;

createApp({
    data(){
        return{
            emailsArray:[]
        }
    },
    methods:{
        getEmails(index){
           for(let i = 1; i <= index; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {   
                this.emailsArray.push(res.data.response)
            })
           }
        }
    },
    beforeMount(){
        this.getEmails(10)
    },
}).mount('#app')


