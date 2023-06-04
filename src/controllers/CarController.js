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
    }
}