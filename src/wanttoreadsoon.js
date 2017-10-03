import React from 'react'
import './App.css'
import Book from './book'

class WantToRead extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedBookState: "wanttoreadsoon"
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({selectedBookState: event.target.value});
  }


  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read Soon {this.state.selectedBookState}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li><Book title="Ready Player One" author="Dan Ann" handleChange={this.handleChange}/></li>
            <li><Book title="1776" author="David McCullough" handleChange={this.handleChange}/></li>
            <li><Book title="Harry Potter and the Sorcerers Stone" author="JK Rowling" handleChange={this.handleChange}/></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead;
