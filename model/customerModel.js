const mongoose = require('mongoose');
const Loanledger = require('./../model/loanledgerModel');

const customerSchema = new mongoose.Schema(
  {
    LOANLEDGERID:[{
        type: 'ObjectId',
        ref: Loanledger
    }],
    NAME: {
        type: String,
        required: true,
        trim: true
    },
    FIRST_NAME:{
        type: String,
        required: true,
        trim: true
    },
    MIDDLE_NAME:{
        type: String,
        required: true,
        trim: true
    },
    LAST_NAME:{
        type: String,
        required: true,
        trim: true
    },
    DATE_OF_BIRTH:{
        type: String,
        required: true,
        trim: true
    },
    GENDER:{
        type: String,
        required: true,
        trim: true
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


const customers = mongoose.model('customers', customerSchema);


module.exports = customers;
//** code  END