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
    }
}