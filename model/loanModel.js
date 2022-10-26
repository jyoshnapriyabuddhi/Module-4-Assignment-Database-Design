const mongoose = require('mongoose');
const customers_1 = require('./../model/customerModel');

const loansSchema = new mongoose.Schema(
  {
    CUSTOMER:{
        type: 'ObjectId',
        ref: customers_1
    },
    Loan_TYPE: {
        type: String,
        required: true
    },
    LOAN_NUMBER:{
        type: Number,
        required: true
    },
    AMOUNT:{
        type: Number,
        required: true
    },
     INTEREST_RATE:{
        type: Number,
        required: true
    },
    LOAN_TERM:{
        type: Number,
        required: true
    },
    START_DATE:{
        type: Date,
        default: Date.now()
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
        type: Boolean
    }   
});
const loans = mongoose.model('loans', loansSchema);

module.exports = loans;
//** code  END