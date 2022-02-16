const { Router } = require('express');
const router = Router();
const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'crudex'
 });

// List User
router.get('/:id', (req, res) => {
	const { id } = req.params;

	let sql = 'select * from users where id = ?';
	// let sql = 'select * from users';
	connection.query(sql,[id], (err, rows, fields) => {
		if(err) throw err;
		else {
			res.json(rows)
		}
	})
});

// List User's
router.get("/", (req, res) => {
	let sql = `select * from users`;

	connection.query(sql, (err, rows, field) => {
		if(err) throw err;
		else (
			res.json(rows)
		)
	})
});


// Agregando 
router.post("/", (req, res) => {
	const { nombre, apellido } = req.body;

	let sql = `insert into clientes(nombre, apellido) values('${nombre}', '${apellido}')`

	connection.query(sql, (err, rows, fields) => {
		if(err) throw err;
		else (
			res.json({status: 'Cliente agregado exitosamente'})
		)
	})
});

// Eliminando 
router.delete("/:id", (req, res) => {
	const {id} = req.params;

	let sql = `DELETE FROM clientes where id = '${id}'`
	connection.query(sql, (err, rows, fiels) => {
		if(err) throw err;
		else (
			res.json({status: 'Cliente borrado existosamente'})
		)
	})
})

// Updateando
router.put('/:id', (req, res) => {
	const {id} = req.params
	const {nombre, apellido} = req.body

	let sql = `update clientes set
				nombre = '${nombre}',
				apellido = '${apellido}'
				where  id = '${id}'`

	connection.query(sql, (err, rows, fields) => {
		if (err) throw err
		else (
			res.json({status: 'Cliente actualizado exitosamente'})
		)
	})
})

// Home
router.get("/register" ,(req, res) => {
	// res.render("../views/register.ejs");
	let sql = 'select * from clientes';
	connection.query(sql, (err, rows, fields) => {
		if (err) throw error;
		else {
			res.json(rows)
		}
	})
});


// 404 Handler
router.use((req, res, next) => {
	res.status(404).send('!404 - No encontrado ni mierda');
});

module.exports = router;
