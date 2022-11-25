const router = require('express').Router();
const { Topic } = require('../db/models');

router.get('/topic', async (req, res) => {
  const topic = await Topic.findAll({ raw: true });
  res.json(topic);
});

module.exports = router;
