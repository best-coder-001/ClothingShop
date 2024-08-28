export interface IFormSignup {
    firstName: string,
    lastName: string, 
    email: string,
    username: string,
    password: string
}

export interface IFormSignIn {
  username: string,
  password: string
}

export interface IContactForm {
  fullname: string
  email: string
  opinion: string
}

export type CardDT = {
  id: number,
  rate: number,
  price: number,
  name: string,
  discount: {
    percent: number
  }
  photo: string
}

export interface ICardList {
  discounts: Array<CardDT>,
  bestPrices: Array<CardDT>,
  top: Array<CardDT>
}