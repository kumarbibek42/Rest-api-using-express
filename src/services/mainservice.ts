import { Request, Response } from 'express';
import { WELCOME_MESSAGE } from '../constants/aplicationconstants';
export class MainService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }
}
