"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
// pool.getConnection(err, connection)
//     .then(connection => {
//         pool.release(connection);
//         console.log('DB is connected');
//     });
// pool.then((r: any) => r.getConnection().then((connection:any)=>{
//     r.releaseConnection(connection);
//     console.log('DB is connected');
// }));
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
});
exports.default = pool;
