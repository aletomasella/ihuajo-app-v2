import { Response, Request } from "express";
import { ExtendedRequest } from "../interfaces/extResponse.interface";
import { registerUpload } from "../services/storage";
import { handleHttpError } from "../utils/error.handle";

class UploadController {
  constructor() {}

  async upload(req: ExtendedRequest, res: Response) {
    try {
      const { user, file } = req;
      const dataToRegisterInDb = {
        fileName: `${file?.filename}`,
        userId: `${user?.id}`,
        path: `${file?.path}`,
      };
      const response = await registerUpload(dataToRegisterInDb);
      res.send(response);
    } catch (error) {
      handleHttpError(error, "HTTP_UPLOAD_ERROR", res);
    }
  }
}

export default UploadController;
