const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /api/hello:
 *  get:
 *      description: welcome to swagggggger jsdoc!
 *      parameters:
 *          -   name: name
 *              in: query
 *              required: false
 *              schema:
 *                  type: string
 *      responses:
 *          200:
 *              description: Returns a myterious string
 */
router.get('/hello', function (req, res, next) {
    const name = req.query.name || 'mtak';
    res.json({message:'hello dear ${name}'});
});
module.exports=router;