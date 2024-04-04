import express from 'express';
import ip from 'ip';
// import cors from 'cors';
// import router from './router.js';
// import bodyParser from 'body-parser';

const app = express();
const ipAddr = ip.address();
const port = 3000;



// app.use(cors());
// app.use(bodyParser.json()); // Permet de parser le body des requêtes POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(router);

app.listen(3000, () => {
    console.log(`Serveur : http://${ipAddr}:${port}`);
    }
);

