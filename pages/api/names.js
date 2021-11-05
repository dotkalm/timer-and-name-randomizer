export default function names(req, res){
	const names = process.env.names
	console.log(req.headers)
	const token = req?.headers?.authorization
	if(token === process.env.token){
		res.send(JSON.stringify({data:names,status:200}))
	}else{
		res.send({errors: 'expired token or no data', status: 500})
	}
}
