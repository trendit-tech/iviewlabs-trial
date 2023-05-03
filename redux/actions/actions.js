export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const EMPTY_ARRAY = "EMPTY_ARRAY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const NON_SIMILER_FILTER = "NON_SIMILER_FILTER";
export const EMPTY_NON_FILTER_ARRAY = "EMPTY_NON_FILTER_ARRAY";

export const addFilter = (filterValue) => ({
  type: ADD_FILTER,
  payload: filterValue,
});

export const removeFilter = (filterValue) => ({
  type: REMOVE_FILTER,
  payload: filterValue,
});

export const emptyArray = () => ({
  type: EMPTY_ARRAY,
});

export const addCategory = (categoryValue) => ({
  type: ADD_CATEGORY,
  payload: categoryValue,
});

export const addNonFilterValue = (filterValue) => ({
  type: NON_SIMILER_FILTER,
  payload: filterValue,
});

export const emptyNonFilterArray = () => ({
  type: EMPTY_NON_FILTER_ARRAY,
});