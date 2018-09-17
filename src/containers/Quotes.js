import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    console.log(this.props.quotes)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {this.props.quotes && this.props.quotes.length > 0 ? this.props.quotes.map(quote => <QuoteCard content={quote.content} author={quote.author} votes={quote.votes} quoteId={quote.id}/>) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

//add arguments to connect as needed
export default connect(mapStateToProps)(Quotes);
