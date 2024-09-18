const { APP_PORT } = require('./config/constants');
const createLogger = require('./config/logger');
const createServer = require('./server');

const logger = createLogger('index.js');
const app = createServer();
const port = APP_PORT;

app.listen(port, () => {
  logger.info('🌎 Server running ...');
  logger.info(`Listening on port ${port}`);
});

// const express = require("express");

// const app = express();
// const port = 3000;

// const a = {
//   name: "amit",
//   phone: "123456789",
// };
// app.get("/", (req, res) => {
//   res.send("App works!!");
// });

// app.get("/api/user", async (req, res) => {
//   try {
//     res.json({
//       msg: "Sucess",
//       Code: 200,
//       data: a,
//     });
//   } catch (error) {
//     res.json({
//       msg: "Error",
//       Code: 404,
//       err: error,
//     });
//   }
// });

// //  res.json({
// //       msg: "Error",
// //       Code: 404,
// //       err: error,
// //     });
// app.listen(port, (err) => {
//   console.log(`running server on from port:::::::${port}`, err);
// });
