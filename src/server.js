import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
    //cutting the process
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  return res.end();
  //종료시켜주는 함수
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

const handleLogin = (req, res) => {
  return res.send("Login here.");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/prtected", handleProtected);
// JS강의에서 했던 addEventListener와 같다고 생각하면 된다.
// home 에서 에러가 뜨는 이유는 console.log만 시켰고 다음 request가 없기 때문이다.
// not answering back.
app.get("/login", handleLogin);
// /login => 주소

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} `);

app.listen(PORT, handleListening);
