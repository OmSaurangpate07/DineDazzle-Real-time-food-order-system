// const viewProduct = (req, res) => {
//     return res.render("viewproduct");
// }

// module.exports = viewProduct;

const Menu = require('../../models/menu')
function viewProduct() {
    return {
        async index(req, res) {
            const pizzas = await Menu.find()
            return res.render('viewProduct', { pizzas: pizzas })
        }
    }
}

module.exports = viewProduct;