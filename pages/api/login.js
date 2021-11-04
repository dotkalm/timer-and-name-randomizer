export default async function login(req, res){
	const password = req.body?.password
	if(password === process.env.password){
		res.send(JSON.stringify({data:process.env.token,status:200}))
	}else{
		res.send({errors: 'wrong password', status: 500})
	}
}

