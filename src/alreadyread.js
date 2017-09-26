import React from 'react'
import './App.css'
import Book from './book'

class AlreadyRead extends React.Component {
  state = {
    currentlyReading: "false",
    wantToRead: "false",
    read: "false",
    selectedBookState: "alreadyreadit"
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read Already 3 {this.state.selectedBookState}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li><Book title="The Hobbit" author="JRR Tolkien"/></li>
            <li><Book title="Oh, the Places Youll Go!" author="Dr Seuss"/></li>
            <li><Book title="The Adventures of Tom Sawyer" author="Mark Twain"/></li>
          </ol>
        </div>
      </div>

    )
  }
}

export default AlreadyRead;
