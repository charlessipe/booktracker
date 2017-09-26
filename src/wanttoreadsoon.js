import React from 'react'
import './App.css'
import Book from './book'

class WantToRead extends React.Component {
  state = {
    currentlyReading: "false",
    wantToRead: "false",
    read: "false",
    selectedBookState: "wanttoreadsoon"
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read Soon {this.state.selectedBookState}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li><Book title="The Hobbit" author="JRR Tolkien"/></li>
            <li><Book title="1776" author="David McCullough"/></li>
            <li><Book title="Harry Potter and the Sorcerers Stone" author="JK Rowling"/></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead;
