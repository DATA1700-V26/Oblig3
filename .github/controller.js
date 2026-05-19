const repo = require("repository");

exports.getUpgrades = async (req, res) => {
    const data = await repo.getAllU();
    res.json(data);
};

exports.createUpgrade = async (req, res) => {
    await repo.createU(req.body);
    res.sendStatus(201);
};

exports.updateUpgrade = async (req, res) => {
    await repo.updateU(req.params.id, req.body);
    res.sendStatus(200);
};

exports.deleteUpgrade = async (req, res) => {
    await repo.deleteU(req.params.id);
    res.sendStatus(200);
};