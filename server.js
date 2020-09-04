const app = require('express')();
const cors = require('cors');
const helmet  = require('helmet');
const webServer = require('./services/web-server');

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({origin:true}));

app.use('/api', webServer);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
