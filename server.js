"use strict";
const express = require('express');
const app = express();
app.use(express.static('.'));

app.listen(3000, () => {
  console.log('Interesting css patterns - http://localhost:3000');
});