//const { response } = require('express');
const express = require('express');
const router = express.Router();
const { MyFriends } = require('../models');

router.get('/', async (req, res) => {
    const listFriends = await MyFriends.findAll();
    res.json(listFriends);
});

router.get('/GetOne/:id', async (req, res) => {
    const id = req.params.id;
    const friend = await MyFriends.findByPk(id);
    res.json(friend);
});

router.put('/Delete', async (req, res) => {
    const obj = req.body;
    // await MyFriends.destroy({ where: { id } });
    try {
        await MyFriends.update({ status_delete: obj.status_delete }, { where: { id: obj.id } })
        res.json({ obj });
    } catch (err) {
        res.send(`Can't delete your friends ${obj.id} set ${obj.status_delete} : ` + err);
    }
});

router.put('/Update', async (req, res) => {
    try {
        const obj = req.body;
        await MyFriends.update({
            first_name: obj.first_name,
            last_name: obj.last_name,
            phone_number: obj.phone_number,
            age: obj.age,
            sex: obj.sex,
            position: obj.position,
            status: obj.status,
        }, { where: { id: obj.id } });
        res.json(obj);
    } catch (err) {
        res.send("Can't update your friends");
    }
    //res.json(jsonResult);
});

router.post('/', async (req, res) => {
    try {
        const post = req.body;
        await MyFriends.create(post);
        res.json(post);
    } catch (err) {
        res.send("Can't create your friends");
    }
    //res.json(jsonResult);
});

module.exports = router;