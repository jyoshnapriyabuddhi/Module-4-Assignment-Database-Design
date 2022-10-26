const mongoose = require('mongoose');


const loanledgerschema = new mongoose.Schema(
{
    PAYMENT_AMOUNT:{
        type: Number,
        required: true
    },
    INTEREST:{
        type: Number,
        required: true
    },
    PRINCIPAL:{
        type: Number,
        required: true
    },
    CREATED_DATE:{
        type: Date,
        default: Date.now()
    },
    MODIFIED_DATE:{
        type: Date,
        default: Date.now()
    },
    IS_DELETED:{
        type: Boolean,
        default: false
    }  
    
});

const loanledger = mongoose.model('loanledger', loanledgerschema);
module.exports =  loanledger;