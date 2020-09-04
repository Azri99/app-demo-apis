const app = require('express')();
const cors = require('cors');

const webServer = require('./services/web-server');

const PORT = 3000;

app.use(cors({origin:true}));

app.use('/api', webServer);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
