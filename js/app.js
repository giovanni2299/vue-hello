console.log('ciao mamma')


const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'Hello vue World!',
        img: 'https://www.memecreator.org/static/images/memes/4735051.jpg'
    }
    }
}).mount('#app')
