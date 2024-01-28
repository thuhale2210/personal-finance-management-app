import express from 'express';
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)));

// const expenseTrackerRoutes = express.Router();
// const expenseTracker = require('./models/ExpenseModel.js');

// expenseTrackerRoutes.route('/').get((req, res) => {
//     expenseTracker.find()
//         .then(expenses => res.status(200).json(expenses))
//         .catch(err => res.status(400).json({ "error": err }))
// });

// expenseTrackerRoutes.route('/:id').get((req, res) => {
//     expenseTracker.findById(req.params.id)
//         .then(expenses => res.status(200).json(expenses))
//         .catch(err => res.status(400).json({ "error": err }))
// })

// expenseTrackerRoutes.route('/add').post((req, res) => {
//     let expense = new expenseTracker(req.body)
//     expense.save()
//         .then(expenses => res.status(200).json(expenses))
//         .catch(err => res.status(400).json({ "error": err }))

// });


// expenseTrackerRoutes.route('/update/:id').post((req, res) => {
//     expenseTracker.findById(req.params.id)
//         .then(expenses => {
//             //Update the object with new data
//             expenses.title = req.body.title;
//             expenses.amount = req.body.amount;
//             expenses.date = req.body.date;
//             expenses.description = req.body.description;
//             expenses.image = req.body.image;
//             expenses.category = req.body.category;

//             //Save new Data
//             expenses.save()
//                 .then(expenses => res.status(200).json(expenses))
//                 .catch(err => res.status(400).json({ "error": err }))

//             res.status(200).json(expenses)
//         })
//         .catch(err => res.status(400).json({ "error": err }))
// });

// app.use(expenseTrackerRoutes);

// Connect to MongoDB
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("DB connected successfully")
})

// Start the server
app.listen(8081, () => {
    console.log("Server is running on 8081");
});