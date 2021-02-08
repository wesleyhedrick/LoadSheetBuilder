const { Saved_Loads } = require('../models')

const getSavedLoads = async (req, res) => {
    console.log('getting saved loads')
    
    const slNames = await Saved_Loads.findAll({
        attributes: ['id','Name']
    })
    
    console.log(slNames.Name)
    res.json(slNames)
}

const getRequested = async (req, res) => {
    const { id } = req.params

    console.log('getting requested load')
    const requestedLoad = await Saved_Loads.findOne({
        where: {
            id
        }
    })

    console.log(requestedLoad)

    res.json(requestedLoad)
}

module.exports = {getSavedLoads, getRequested}