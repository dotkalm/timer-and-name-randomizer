export default function getNames(req, res){
	console.log(req.header, process.env.names)
	const names = process.env.names
	const token = req?.header?.Authorization
	if(token === process.env.token){
		res.send(JSON.stringify({data:names,status:200}))
	}else{
		res.send({errors: 'expired token or no data', status: 500})
	}
}
