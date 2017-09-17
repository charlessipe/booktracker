import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';
import BooksApp from './App.js';

class BookResults extends React.Component {

  constructor() {
    super();
    this.state = {
      books: [],
      getSearchInput:  "web development",//this.state.searchInput
      selectedBookState: "want to read",
      selectedBook: "book1"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //this.setState({ getSearchInput:  })

  handleChange(event) {
    this.setState({selectedBookState: event.target.value});
  }

  componentDidMount() {
    BooksAPI.search(this.props.query,3).then((books) => {
        console.log(books)
        this.setState({ books })
    })
  }

  render() {
    return (
        <div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Search Results {this.state.selectedBookState} {this.state.selectedBook}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <img className="book-cover" style={{ width: 128, height: 193}} src={this.state.books[0] && this.state.books[0].imageLinks.smallThumbnail}/>
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
                      <div className="book-title">{this.state.books[0] && this.state.books[0].title}</div>
                      <div className="book-authors">{this.state.books[0] && this.state.books[0].authors[0]}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <img className="book-cover" style={{ width: 128, height: 193}} src={this.state.books[0] && this.state.books[1].imageLinks.smallThumbnail}/>
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
                      <div className="book-title">{this.state.books[0] && this.state.books[1].title}</div>
                      <div className="book-authors">{this.state.books[0] && this.state.books[1].authors[0]}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <img className="book-cover" style={{ width: 128, height: 193}} src={this.state.books[0] && this.state.books[2].imageLinks.smallThumbnail}/>
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
                      <div className="book-title">{this.state.books[0] && this.state.books[2].title}</div>
                      <div className="book-authors">{this.state.books[0] && this.state.books[2].authors[0]}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <img className="book-cover" style={{ width: 128, height: 193}} src={this.state.books[0] && this.state.books[3].imageLinks.smallThumbnail}/>
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
                      <div className="book-title">{this.state.books[0] && this.state.books[3].title}</div>
                      <div className="book-authors">{this.state.books[0] && this.state.books[3].authors[0]}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <img className="book-cover" style={{ width: 128, height: 193}} src={this.state.books[0] && this.state.books[4].imageLinks.smallThumbnail}/>
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
                      <div className="book-title">{this.state.books[0] && this.state.books[4].title}</div>
                      <div className="book-authors">{this.state.books[0] && this.state.books[4].authors[0]}</div>
                    </div>
                  </li>
                </ol>
              </div>

            </div>
            </div>
            </div>

      </div>
    )
  }
}

export default BookResults;
