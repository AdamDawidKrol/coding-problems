import { Request, Response } from 'express'
import { ResourceLimits } from 'worker_threads'

type UserBody = {
  userName: string
  useremail: string
  userMessage: string
}

export function home(req: Request, res: Response) {
  console.log('home')

  res.render('home')
}
export function notFound(req: Request, res: Response) {
  res.render('404')
}
export function serverError(err: any, req: Request, res: Response, next: any) {
  res.render('500')
}
export function addUser(req: Request, res: Response) {
  const body: UserBody = req.body
  res.render('user-added', { userName: body.userName })
}
