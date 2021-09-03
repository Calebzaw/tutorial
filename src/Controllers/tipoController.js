import tipo from '../Models/tipo.js'

export default {
    getAll: (req, res) => {
        tipo.findAll({
            raw:true
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    getOne: (req, res) => {
        tipo.findByPk(req.params.idtipo)
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    add: (req, res) => {
        tipo.create({
            nmtipo: req.body.nmtipo
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        let { nmtipo, fltipo } = req.body
        let { idtipo } = req.params
        tipo.update({
            nmtipo,
            fltipo
        },{
            where: {idtipo}
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        let { idtipo } = req.params
        tipo.destroy({
            where: {idtipo}
        })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
    },
}
