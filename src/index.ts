import express from "express";
import routes from "./Routes/Index_Routes";
import File from "./main";

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, async () => {
  await File.CreateOutputDir_Path();

  ("Try Logging To http://localhost:3000/api/images?ImageName=fjord&ImageWidth=99&ImageHeight=99");
});

export default app;
