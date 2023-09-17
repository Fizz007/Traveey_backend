const moongoose = require('mongoose')

moongoose.connect(process.env.URL,{
    dbName: "Traveey"
}).then(()=> {
    console.log('DB Connected')
}).catch((err)=> {
console.log('error', err.message)
})

