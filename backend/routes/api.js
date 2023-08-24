const express = require('express');
const router = express.Router();
/**
* @openapi
* /api/hello:
*   get:
*     description: Welcome to swagger-jsdoc!
*     parameters:
*       - name: name
*         in: query
*         required: false
*         schema:
*           type: string
*     responses:
*       200:
*         description: Returns a mysterious string.
*/
router.get('/hello', function (req, res, next) {
  const name = req.query.name || 'World';
  console.log(`Hello ${name}`)
  res.json({ message: `Hello dear ${name}` });
});
module.exports = router;