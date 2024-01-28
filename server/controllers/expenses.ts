const ExpenseSchema = require('../models/ExpenseModel');

exports.addExpense = async (req, res) => {
    const { title, amount, date, type, description, category } = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        date,
        type,
        description,
        category
    });

    try {
        // Validiation
        if (!title || !date || !type || !description || !category) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        if (amount < 0 || amount === 'number') {
            return res.status(400).json({ msg: 'Please enter a valid amount' });
        }

        await expense.save();
        res.status(200).json({ msg: 'Expense added successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

    console.log(expense);
}

exports.getExpense = async (req, res) => {
    try {
        const expense = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => res.status(200).json('Expense deleted successfully'))
        .catch((error) => res.status(500).json({ msg: error.message }));
}