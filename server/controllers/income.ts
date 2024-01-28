const IncomeSchema = require('../models/IncomeModel');

exports.addIncome = async (req, res) => {
    const { title, amount, date, type, description, category } = req.body;

    const income = IncomeSchema({
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

        await income.save();
        res.status(200).json({ msg: 'Income added successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

    console.log(income);
}

exports.getIncome = async (req, res) => {
    try {
        const income = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => res.status(200).json('Income deleted successfully'))
        .catch((error) => res.status(500).json({ msg: error.message }));
}