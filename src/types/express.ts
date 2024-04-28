import { JwtPayload } from "./types.js";
declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}
