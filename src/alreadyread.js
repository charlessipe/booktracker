import React from 'react'
import './App.css'
import Book from './book'

class AlreadyRead extends React.Component {
  constructor() {
    super();
    this.state = {
    currentlyReading: "false",
    wantToRead: "false",
    read: "false",
    selectedBookState: "alreadyreadit"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedBookState: event.target.value});
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read Already 3 {this.state.selectedBookState}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li><Book title="The Hobbit" author="JRR Tolkien" handleChange={this.handleChange}/></li>
            <li><Book title="Oh, the Places Youll Go!" author="Dr Seuss" handleChange={this.handleChange}/></li>
            <li><Book title="The Adventures of Tom Sawyer" author="Mark Twain" handleChange={this.handleChange}/></li>
          </ol>
        </div>
      </div>

    )
  }
}

export default AlreadyRead;
