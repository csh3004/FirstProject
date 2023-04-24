const express = require('express')
const app = express()
const port = 3000

 // body-parser는 내장되어있음.  json 파싱하기 위해서 설정만 추가
 app.use(express.json());
 
 // express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
 // 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
 app.use(express.urlencoded({
   extended: true
 }))



app.post('/', (req, res) => {
    // console.log(req.body)
    // const result = req.body
    // res.send(result)
    id = "hoon"
    pw = "1234"

    if (req.body.id !== id) res.send("아디틀림")    
    if (req.body.pw !== pw) res.send("틀림")
    res.send("로그인성공")
  })

 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})