export default async function login(req, res){
	const password = req.body?.password
	if(password === process.env.password){
		const response = {data:process.env.token,status:200}
		res.send(JSON.stringify(response))
	}else{
		res.send({errors: 'wrong password', status: 500})
	}
}

