import mongoose = require('mongoose');
import { Schema } from 'mongoose';

let ExpenseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        require: true,
        maxLength: 20,
        trim: true
    },
    date: {
        type: Date,
        require: true,
        trim: true
    },
    type: {
        type: String,
        default: 'expense'
    },
    description: {
        type: String,
        require: false,
        maxLength: 100,
        trim: true
    },
    category: {
        type: String,
        require: true,
        trim: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);