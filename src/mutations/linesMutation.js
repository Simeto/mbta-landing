export const mutateLines = (state, action) => {
  const { payload } = action
  return {...state, lines: payload.data}
}

export const mutateFetchedLines = (state, action) => {
  const { payload } = action
  return {...state, fetchedLines: payload.lines ? payload.lines : payload}
}

export const mutateLineRoutes = (state, action) => {
  const { payload } = action
  return {...state, lineRoutes: payload}
}