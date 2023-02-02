export interface IProduct {
  id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate:number
    count: number
  }
}

export type AdressesType = {
  geolocation: {
    lat: string
    long: string
  }
  city: string
  street: string
  number: number
  zipcode: string
}

export interface IUser {
  address: AdressesType
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  __v: number
}