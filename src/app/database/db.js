const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const db = require('./connection')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database Connected....');
})

// Get all data
// module.get=(app.get);

app.get('/Products', (req, res) => {
    let qr = `Select * from public."Products"`
    db
        .query({
            // rowMode: "array",
            text: qr
        })
        .then(result => {
            
            var data1 = []; 
            for (var i = 0; i < result.rows.length; i++) {
                data1.push({
                    productId: result.rows[i].productId,
                    productName: result.rows[i].productName,
                    productPrice: result.rows[i].productPrice,
                    productCategories: result.rows[i].productCategories,
                    productDescription: result.rows[i].productDescription,
                    productImage: result.rows[i].productImage
                });
            }
            // console.log(result);
            // if(result.length > 0)
            // {
            // console.log(result.rows[0].Name);
            res.send(
                // message: 'all user data',
                // data: result.rows
                data1
            );
            // }
        })
        .catch(err => console.log(err, 'errs'));
});



app.listen(3000, () => {
    console.log('Server Running');
})





















// const client = require('./connection.js')
// const express = require('express');
// const app = express();

// //connection
// client.connect(err => {

//     if (err) { console.log('err'); }

//     console.log('database Connected....');

// })

// app.listen(3000, ()=>{
//     console.log("Sever is running out at port 3000 http://localhost:3000/products");
// })

// client.connect(); 

// //get all data in json 
// app.get('/Products', (req, res)=>{
//     client.query(`Select * from public."Products"`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })


// app.get('Products/:productId', (req, res)=>{
//     client.query(`Select * from public."Products" where productId=${req.params.productId}`, (err, result)=>{
//         if(!err){
//             res.send(result.rows);
//         }
//     });
//     client.end;
// })







































// const express = require('express');
// const { ConnectableObservable } = require('rxjs');

// // const bodyparser=require('body-parser');
// // const cors =require('cors');

// const db = require('../connection.js')

// const app = express();

// // app.use(cors());
// // app.use(bodyparser.json());

// // Connection
// db.connect(err => {
//     if (err) { console.log('err'); }
//     console.log('database Connected....');
// })

// // Get all data

// app.get('/FastShopping', (req, res) => {
//     let qr = `Select * from public."FastShopping"`
//     db
//   .query({rowMode:"array",
//     text:qr})
//   .then(result => {
//     // console.log(result);
//     // if(result.length > 0)
//     // {
//             res.send({
//             message: 'all user data',
//             data: result.rows

//         });
//     // }
// })

//   .catch(err => console.log(err, 'errs'));

//     // db.query(rowMode="array", qr, (err, result) => {
//     //     if (err) {
//     //         console.log(err, 'errs');
//     //     }
//     //     else (result.length > 0)
//     //     {
//     //         res.send({
//     //             message: 'all user data',
//     //             data: result.rows

//     //         });
//     //     }
//     // });
// });

// // Get single Data

// app.get('/Products/:id', (req, res) => {
//     let gID = req.params.id;

//     let qr = `Select * from public."Products" where id=${gID}`;
//     db.query(qr, (err, result) => {
//         if (err) { 
//             console.log(err); 
//         }
//         if (result.length > 0) {
//             res.send({
//                 message: 'get single data',
//                 data: result
//             })
//         }
//         else {
//             res.send({
//                 message: 'data not found'
//             });
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log('Server Running');
// })