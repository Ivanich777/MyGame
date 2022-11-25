const router = require('express').Router();
const { Card, Topic } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const card = await Card.findAll({
      // include: {
      //   model: Topic,
      //   raw: true,
      //   attributes: ['name', 'id'],
      // },
      // attributes: ['id', 'answer', 'question', 'cost', 'topic_id'],
      raw: true,
    });

    res.json(card);
  } catch (e) { console.log(e.message); }
})
  

module.exports = router;
