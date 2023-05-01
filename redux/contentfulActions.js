import * as contentful from "contentful";

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

export const fetchContentfulData = (isPreview) => {
  return (dispatch) => {
    let client;

    if (isPreview) {
      client = contentful.createClient({
        space: space,
        accessToken: previewAccessToken,
        host: "preview.contentful.com",
      });
    } else {
      client = contentful.createClient({
        space: space,
        accessToken: accessToken,
      });
    }

    client
      .getEntries()
      .then((response) => {
        dispatch({
          type: "FETCH_CONTENTFUL_DATA_SUCCESS",
          payload: response.items,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_CONTENTFUL_DATA_FAILURE", error: error });
      });
  };
};