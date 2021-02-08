const { Products } = require('../models')
const getCandVs = async (req, res) => {
    let products = await Products.findAll();
    let productsCandV = products.map(item => item.dataValues);
    let special = {};
    let main = {};

    productsCandV.filter(item => item.type === 'Special')
    .forEach(item => {
        special[item.product_code] = item.loader_code; 
    });

    productsCandV.filter(item => item.type === 'Main')
    .forEach(item => {
        main[item.product_code] = item.loader_code; 
    });

    products = {};
    products.main = main;
    products.special = special;

    res.status(200).json(products);

}


module.exports = { getCandVs }