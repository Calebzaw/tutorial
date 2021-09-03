import produto from '../Models/produto.js'
import tipo from '../Models/tipo.js'

produto.belongsTo(tipo, {
    foreignKey: 'idtipo'
})
tipo.hasMany(produto, {
    foreignKey: 'idtipo'
})

export default {
    getAll: (req, res) => {
        produto.findAll({
            raw:true,
            include: [{
                model: tipo,
                attributes: ['nmtipo']
            }]
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    getOne: (req, res) => {
        produto.findByPk(req.params.idproduto)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    add: (req, res) => {
        let { nmproduto, dsproduto, idtipo, preco, cdbarras = '' } = req.body
        produto.create({
            nmproduto,
            dsproduto,
            idtipo,
            preco,
            cdbarras
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        let { nmproduto, dsproduto, flproduto, idtipo, preco, cdbarras } = req.body
        let { idproduto } = req.params
        produto.update({
            nmproduto,
            dsproduto,
            flproduto,
            idtipo,
            preco,
            cdbarras
        },{
            where: {idproduto}
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        let { idproduto } = req.params
        produto.destroy({
            where: {idproduto}
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },
}
