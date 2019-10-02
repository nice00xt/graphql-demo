import gql from 'graphql-tag'

export const fetchSongs = gql`
  {
    songs {
      id
      title
    }
  }
`;

export const fetchSong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

export const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;