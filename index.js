const express = require("express");
const app = express();

app.get('/', (req,res) =>{
	res.send('Kelompok 6')
});

app.listen(3000, () => {
	console.log('Server Started')
})