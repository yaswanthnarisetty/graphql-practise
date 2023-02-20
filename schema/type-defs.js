import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    _id: String!
    name: String!
    email: String!
    password: String!
    role: String!
    token: String
  }

  type Product {
    _id: String
    name: String
    price: String
    category: String
    company: String
  }

  input ProductInput {
    name: String
    price: String
    category:String
    company:String
    
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
    role: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    product(id: ID): Product
    getProducts: [Product]
    findProduct(id:ID):Product
  }

  type Mutation {
    RegisterUser(registerInput: RegisterInput): User
    LoginUser(loginInput: LoginInput): User
    UpdateProduct(_id:ID! ,productInput: ProductInput): Product
    FindProduct(_id:ID!):Product
    DeleteProduct(_id:ID!):Product
    AddProduct(productInput:ProductInput):Product
  }
`;
