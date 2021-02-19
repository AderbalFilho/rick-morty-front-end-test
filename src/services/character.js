import axios from 'axios';

class Character {
  getCharacters(page = 1, search = '') {
    return axios.post('https://rickandmortyapi.com/graphql', {
      query: `
        query {
          characters(page: ${page}, filter: { name: "${search}" }) {
            info {
              pages
            }
            results {
              id,
              name,
              status,
              species,
              gender,
              image,
              origin {
                name,
                type,
                dimension,
                residents {
                  id
                }
              },
              location {
                name,
                type,
                dimension,
                residents {
                  id
                }
              },
              episode {
                air_date
              }
            }
          }
        }
      `,
    });
  }
}

export default new Character();
