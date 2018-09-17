import React from 'react';
import {upvoteQuote, downvoteQuote, removeQuote} from "../actions/quotes"
import { connect } from "react-redux"

const QuoteCard = (props) => {
  return (<div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.content}</p>
          <footer>- author <cite title="Source Title">{props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.upvoteQuote(props.quoteId)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteQuote(props.quoteId)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeQuote(props.quoteId)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.votes}
      </div>
    </div>
  </div>)
}

export default connect(null, {upvoteQuote, downvoteQuote, removeQuote}) (QuoteCard);
