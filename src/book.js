
import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {

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
    this.props.setState({selectedBookState: event.target.value});
  }

  render() {
    return (

      <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.selectedBookState} onChange={this.props.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
      </div>

    )
  }
}

export default Book;
