import { gql } from './gql'

const QUERY_VERSION = `
  query Version { version }
`
export async function version (variables) {
  const data = await gql(QUERY_VERSION, variables)
  return data
}
