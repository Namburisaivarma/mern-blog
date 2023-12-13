const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
require('dotenv').config();

const app = express();

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
