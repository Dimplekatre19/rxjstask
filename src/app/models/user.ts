export interface Iusers{
    name: string;
    email: string;
    website: string;
    phone: string;
    address: Address
    company : company
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }

 export interface company {
    name: string;
    catchPhrase: string
    bs: string
  }

  export interface Iuser{
    name: string;
    email: string;
    website: string;
    phone: string;
    address: Address
  }