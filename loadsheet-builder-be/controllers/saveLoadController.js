const {Saved_Loads} = require('../models')

const saveLoad = async (req, res) => {
    const {loadName, items} = req.body
    await Saved_Loads.create({Name: loadName, Data: items})
    res.json('saving load');
}

module.exports = {saveLoad}