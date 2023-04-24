import * as contentful from 'contentful';

// const space = process.env.CONTENTFUL_SPACE;
// const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export const fetchContentfulData = () => {
  return (dispatch) => {
    const client = contentful.createClient({
      space: "oovsmbukyz6f",
      accessToken: "RGz1-MZ11eexyDYU-VoNVSQinU-bovMXNI-og_qRUVM"
    });
    
    client.getEntries()
      .then(response => {
        dispatch({ type: 'FETCH_CONTENTFUL_DATA_SUCCESS', payload: response.items });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_CONTENTFUL_DATA_FAILURE', error: error });
      });
  };
};