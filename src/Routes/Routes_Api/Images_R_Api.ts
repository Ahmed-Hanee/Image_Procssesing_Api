import express from "express";
import File from "../../main";

const Router_Image = express.Router();

export class Image_Main {
  ImageName?: string;
  ImageWidth?: string;
  ImageHeight?: string;
}

Router_Image.get("/", async (req, res) => {
  const validationMessage: null | string = await Image_Validation(req.query);
  if (validationMessage) {
    res.send(validationMessage);
    return;
  }
  let Err: null | string = "";

  if (!(await File.OutPutDir_Check(req.query))) {
    Err = await File.CreateOutput_Dir(req.query);
  }

  if (Err) {
    res.send(Err);
    return;
  }

  const path: null | string = await File.Image_Get_Path(req.query);
  if (path) {
    res.sendFile(path);
  } else {
    res.send("Error While Compiling ?");
  }
});

const Image_Validation = async (query: Image_Main) => {
  const width: number = parseInt(query.ImageWidth || " ");
  const height: number = parseInt(query.ImageHeight || "");

  if (!query.ImageWidth && !query.ImageHeight) {
    return null;
  }

  if (Number.isNaN(width) || Number.isNaN(height)) {
    return "Wrong Input In Width And Height Fields.";
  }

  if (width < 1 || height < 1) {
    return "Negative Invalid Interger For Width Or Height Fields.";
  }

  return null;
};

export default Router_Image;
