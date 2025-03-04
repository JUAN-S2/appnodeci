import express from 'express';
const app = express();
const port = 3000;

 app.get('/', async(req, res) => {
    try {
        res.status(200).json({
            message: '¡Hola mundo!'
        });
    } catch (error) {
        console.error('Error en la ruta /:', error);
        res.status(500).json({
            message: 'Ocurrió un error en el servidor'
        });
    }
 })

 app.listen(port, () => {
    console.log(`Servidor escuchando en  http://localhost:${port}`);
  });