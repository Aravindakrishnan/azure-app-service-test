const app = require('express')();

const PORT = process.env.PORT || 80;

app.get('/',(req,res)=> {
	res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(PORT,()=> {
	console.log(`Server is connected http://localhost:${PORT}`);
})
