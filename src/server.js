import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("I still love you");
  //종료시켜주는 함수
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.get("/", handleHome);
// JS강의에서 했던 addEventListener와 같다고 생각하면 된다.
// home 에서 에러가 뜨는 이유는 console.log만 시켰고 다음 request가 없기 때문이다.
// not answering back.
app.get("/login", handleLogin);
// /login => 주소

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} `);

app.listen(PORT, handleListening);
