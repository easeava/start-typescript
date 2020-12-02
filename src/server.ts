import net from 'net'

net.createServer().listen(3000)

const a = () => {
	console.log(123)
}

a()
