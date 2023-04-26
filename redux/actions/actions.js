export const ADD_FILTER = 'ADD_FILTER';
export const EMPTY_ARRAY = 'EMPTY_ARRAY';

export const addFilter = (filterValue) => ({
  type: ADD_FILTER,
  payload: filterValue
});

export const emptyArray = () => ({
  type: EMPTY_ARRAY,
});