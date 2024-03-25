console.log('ciao mamma')


const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'Hello vue World!'
    }
    }
}).mount('#app')
