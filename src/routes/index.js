const express = require('express');
const path = require('path');
const router = express.Router(); // <- ISSO É O IMPORTANTE

router.get('/cadastro', (req, res) => {
res.render('cadastro'); // Renderiza a página cadastro.ejs
});

module.exports = router;
