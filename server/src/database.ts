import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

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

export default pool;