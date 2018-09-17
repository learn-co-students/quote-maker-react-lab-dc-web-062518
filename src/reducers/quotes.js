import uuid from "uuid";

export default (state = [], action) => {

  switch (action.type) {
    case "ADD_QUOTE" :
      return [...state, action.quote]
    case "REMOVE_QUOTE" :
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE" :
      let newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes = quote.votes + 1
          return quote
        } else {
          return quote
        }
      })
      return newState
    case "DOWNVOTE_QUOTE" :
      let arr = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes !== 0) {
          quote.votes = quote.votes - 1
          return quote
        } else {
          return quote
        }
      })
      return arr
    default :
      return state

  }
}
