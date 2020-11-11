"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : {"default": mod};
};
Object.defineProperty(exports, "__esModule", {value: true});
const express_1 = __importDefault(require("express"));
const functions = require('firebase-functions');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express_1.default();
app.use(cors());
app.use(bodyParser.json());
// app.get('/', ((req: Request, res: Response, next: NextFunction) => {
//     res.send("Use post request instead")
// }))
// app.use(express.urlencoded({extended: false}));
// takes an array of strings, the strings are the pages we want our backend to allow access to:
// var allowedOrigins = ['http://localhost:3000'];
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
require("./app/routes/index.routes")(app);
// app.listen(5000, () => console.log("server started")); // start the server on port 5K
// app.on('data', (data) => {
//     console.log(data)
// })
exports.api = functions.https.onRequest(app);
