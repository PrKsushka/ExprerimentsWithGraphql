import {gql} from "@apollo/client";

export const GET_DATA_ABOUT_COUNTRIES = gql`
query {
  countries {
    name,
    continent {name},
    code,
    emoji
  }
}
`