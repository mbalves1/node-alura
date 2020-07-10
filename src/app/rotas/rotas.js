const bd = require('../../config/database');

module.exports = (app) => {


    app.get('/', (req, res) => {
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Hello! Node JS</h1>
                </body>
            </html>   
    `);
    });

    app.get('/livros', (req, res) => {
        db.all('select * FROM livros', (erro, resultados)=>{

            res.marko(
               require('../views/livros/lista/lista.marko'),
               {
                    livros: resultados
               }
            );
        });
    });

}