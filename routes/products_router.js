const {getAllProducts,getAllProductsTesting} = require('../controllers/products')

const express = require('express');
const router = express.Router();
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
// router.route("/").get(getAllProducts);

module.exports = router;