const http = require('node:http')

const server = http.createServer()

const port = 3000

const server.on("request", (req, res)=>{
    console.log(`requisicao recebida! metodo ${req.method} e rota: ${req.toute}`)
    res.writeheader(200,{"content-type": "text/plain;charset=utf-8"})
    res.end("servidor HTTP nativo funcionando!")
     })
     
     server.listen(port, () => {
     console.log(`servidor escutando na porta ${port}`)
     })