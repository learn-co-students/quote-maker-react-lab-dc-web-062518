
export default function quoteReducer(state = [], action){
let i
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {...action.quote, votes: 0}]

    case 'REMOVE_QUOTE':

      i = state.indexOf(action.quoteId)
      
      return [...state.slice(0, i), ...state.slice(i + 1)]

    case 'UPVOTE_QUOTE':
      let arr = state.map(quote=>{
        if(quote.id === action.quoteId){
          return {...quote, votes: quote.votes + 1}
        }else{
          return quote
        }
      })
      return arr

      case 'DOWNVOTE_QUOTE':
        arr = state.map(quote=>{
        if(quote.id === action.quoteId){
          if (quote.votes === 0)return quote
          return {...quote, votes: quote.votes - 1}
        }else{
        return quote
        }
      })
      return arr

    default:
      return state

  }

}
