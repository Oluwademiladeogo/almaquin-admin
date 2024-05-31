import { JwtPayload } from "./types";
declare module "express" {
  interface Request {
    user?: JwtPayload;
  }
}
