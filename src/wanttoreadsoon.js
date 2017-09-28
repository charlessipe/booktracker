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
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <select value={this.state.selectedBookState} onChange={this.handleChange}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">To Kill a Mockingbird</div>
                <div className="book-authors">Harper Lee</div>
              </div>
            </li>
            <li><Book title="Ready Player One" author="Dan Ann"/></li>
            <li><Book title="1776" author="David McCullough"/></li>
            <li><Book title="Harry Potter and the Sorcerers Stone" author="JK Rowling"/></li>
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead;
