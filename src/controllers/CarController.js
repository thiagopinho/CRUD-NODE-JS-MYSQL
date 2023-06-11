const CarService = require('../services/CarServices');

module.exports = {
    getAll: async (req, res) => {
        let json = { error: '', result: [] };
        let cars = await CarService.getAll();

        for (let i in cars) {
            json.result.push({
                id: cars[i].id,
                description: cars[i].model
            });
        }
        res.json(json);
    },
    getByID: async (req, res) => {
        let json = { error: '', result: {} };
        let id = req.params.id;
        let car = await CarService.getByID(id);
        if (car) {
            json.result = car;
        }
        res.json(json);
    },
    insert: async (req, res) => {
        let json = { error: '', result: {} };
        let model = req.body.model;
        let plate = req.body.plate;

        if (model && plate) {
            let CarID = await CarService.insert(model, plate);
            json.result = {
                id: CarID,
                model,
                plate
            };
        } else {
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
    update: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let model = req.body.model;
        let plate = req.body.plate;

        if (id && model && plate) {
            await CarService.update(id, model, plate);
            json.result = {
                id,
                model,
                plate
            };
        } else {
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
    delete: async (req, res) => {
        let json = { error: '', result: {} };
        await CarService.delete(req.params.id);
        json.result = {
            id
        };
        res.json(json);
    },
}