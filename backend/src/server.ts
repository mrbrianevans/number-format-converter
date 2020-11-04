import express, {Application} from "express";

const cors = require('cors');
const bodyParser = require("body-parser");
const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/', ((req, res, next) => {
    res.send("Use post request instead")
}))

// app.use(express.urlencoded({extended: false}));


// takes an array of strings, the strings are the pages we want our backend to allow access to:
// var allowedOrigins = ['http://localhost:3000', '*'];
// app.use(cors({
//   	origin: function(origin:any, callback:any){
//     	if(allowedOrigins.indexOf(origin) === -1){
//       	var msg = 'The CORS policy for this site does not ' +  'allow access from the specified Origin.';
//       	return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));


// connect the server to the routes file
require("./app/routes/index.routes.ts")(app);
app.listen(5000, () => console.log("server started")); // start the server on port 5K
app.on('data', (data) => {
    console.log(data)
})
