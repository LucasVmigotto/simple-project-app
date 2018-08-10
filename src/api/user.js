import { gql } from './gql'

const QUERY_USERS = `
  query Users($name: String) {
    users {
      id name birthday createAt updateAt
    }
  }
`

const QUERY_USER = `
  query User($id: ID!) {
    user(id: $id) {
      id name birthday createAt updateAt
    }
  }
`
const MUTATION_CREATE = `
  mutation Create($input: UserInput!) {
    saveUser(input: $input) {
      id name
    }
  }
`

const MUTATION_UPDATE = `
  mutation Update($id: ID!, $input: UserInput!) {
    saveUser(id: $id, input: $input) {
      id name
    }
  }
`

const MUTATION_DELETE = `
  mutation Delete($id: ID!) {
    deleteUser(id: $id)
  }
`

export async function listUsers (variables) {
  const data = await gql(QUERY_USERS, variables)
  return data
}

export async function readUser (variables) {
  const data = await gql(QUERY_USER, variables)
  return data
}

export async function createUser (variables) {
  const data = await gql(MUTATION_CREATE, variables)
  return data
}

export async function updateUser (variables) {
  const data = await gql(MUTATION_UPDATE, variables)
  return data
}

export async function deleteUser (variables) {
  const data = await gql(MUTATION_DELETE, variables)
  return data
}
