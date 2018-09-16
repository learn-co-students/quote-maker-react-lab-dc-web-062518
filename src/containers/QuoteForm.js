import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import uuid from 'uuid'

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
      // Handle Form Submit event default
    e.preventDefault()
    // Create quote object from state
    const quote = {...this.state, id: uuid()}
    // Pass quote object to action creator
    this.props.addQuote(quote)
    // Update component state to return to default state
    this.setState({
      content: '',
      author: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label name="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name= 'content'
                        onChange={e=>this.handleOnChange(e)}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label name="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input name= 'author'
                        onChange={e=>this.handleOnChange(e)}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch=>{
  return { addQuote: quote=> dispatch(addQuote(quote)) }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
