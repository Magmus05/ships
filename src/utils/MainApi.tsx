import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://vortex.korabli.su/api/graphql/glossary/",
});


export function getShips (){
return  client
  .query({
    query: gql`
      query {
        vehicles {
            title
            description
            icons {
              large
              medium
            }
            level
            type {
              name
              title
              icons {
                default
              }
            }
            nation {
              name
              title
              color
              icons {
                small
                medium
                large
              }
            }
          }
      }
    `,
  })
}
