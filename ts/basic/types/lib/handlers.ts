import { Request, Response } from 'express'

export function home(req: Request, res: Response) {
  res.render('home')
}
export function notFound(req: Request, res: Response) {
  res.render('404')
}
export function serverError(err: any, req: Request, res: Response, next: any) {
  res.render('500')
}
