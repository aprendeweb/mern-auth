const express = require('express');
const app = express();
const cors = require('cors');
const { port } = require('./config');
const userRoutes = require('./src/routes/user');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server listen on por ${port}`);
});
