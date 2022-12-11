import sharp from "sharp";

export class Resizing {
  Input_Dir: string | undefined;
  OutPut_Dir: string | undefined;
  Nwidth: number | undefined;
  Nheight: number | undefined;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const processImage = async (query: Resizing) => {
  try {
    await sharp(query.Input_Dir)
      .resize(query.Nwidth, query.Nheight)
      .toFormat("jpeg")
      .toFile(query.OutPut_Dir as unknown as string);
    return null;
  } catch {
    return "Error In resizing The Image";
  }
};

export default processImage;
