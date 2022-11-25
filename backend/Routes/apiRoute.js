const router = require('express').Router();
const { Card, Topic, User } = require('../db/models');

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
  .put('/score', async (req, res) => {
    try {
      const { id, answer } = req.body;
      console.log(id, '===');
      const user = await User.findOne({ where: { id: req.session.userId } });
      const card = await Card.findOne({ where: { id: Number(id) } });
      if (card.answer === answer) {
        user.points += card.cost;
      } else {
        user.points -= card.cost;
      }
      user.save();
      res.json({ points: user.points });
    } catch (e) {
      console.log(e.message);
    }
  });

module.exports = router;
