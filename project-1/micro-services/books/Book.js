const mongoose = require('mongoose')

mongoose.model('Book',{
    
        bookName:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        numberOfPages:{
            type:Number,
            required:false
        },
        publisher:{
            type:String,
            required:false
        }
    
})