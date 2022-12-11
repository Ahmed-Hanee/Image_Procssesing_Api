import { promises as fs } from "fs";
import path from "path";
import processImage from "./Image_Src";

export class Image_File {
  ImageName?: string;
  ImageWidth?: string;
  ImageHeight?: string;
}

export default class File {
  static InputFolder = path.resolve(
    __dirname,
    "./../Udacity_Images/images/Original_Images"
  );
  static OutPutFolder = path.resolve(
    __dirname,
    "./../Udacity_Images/images/New_Images"
  );
  static async CreateOutputDir_Path() {
    try {
      await fs.access(File.OutPutFolder);
    } catch {
      fs.mkdir(File.OutPutFolder);
    }
  }

  static async CreateOutput_Dir(params: Image_File) {
    if (!params.ImageName || !params.ImageWidth || !params.ImageHeight) {
      return null;
    }

    const filePathFull: string = path.resolve(
      File.InputFolder,
      `${params.ImageName}.jpg`
    );
    const filePathThumb: string = path.resolve(
      File.OutPutFolder,
      `${params.ImageName}-${params.ImageWidth}x${params.ImageHeight}.jpg`
    );

    return await processImage({
      Input_Dir: filePathFull,
      OutPut_Dir: filePathThumb,
      Nwidth: parseInt(params.ImageWidth),
      Nheight: parseInt(params.ImageHeight),
    });
  }
  static async Image_Get_Path(params: Image_File) {
    if (!params.ImageName) {
      return null;
    }

    const FileP: string =
      params.ImageWidth && params.ImageHeight
        ? path.resolve(
            File.OutPutFolder,
            `${params.ImageName}-${params.ImageWidth}x${params.ImageHeight}.jpg`
          )
        : path.resolve(File.InputFolder, `${params.ImageName}.jpg`);

    try {
      await fs.access(FileP);
      return FileP;
    } catch {
      return null;
    }
  }
  static async OutPutDir_Check(params: Image_File) {
    if (!params.ImageName || !params.ImageWidth || !params.ImageHeight) {
      return false;
    }

    const FileP: string = path.resolve(
      File.OutPutFolder,
      `${params.ImageName}-${params.ImageWidth}x${params.ImageHeight}.jpg`
    );
    try {
      await fs.access(FileP);
      console.log(` ${FileP}`);
      return true;
    } catch {
      return false;
    }
  }

  
}
