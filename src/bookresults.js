import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';
import BooksApp from './App.js';

class BookResults extends React.Component {

  constructor() {
    super();
    this.state = {
      books: [],
      getSearchInput:  "web development"//this.state.searchInput
    };
  }

  componentDidMount() {
    BooksAPI.search(this.state.getSearchInput,3).then((books) => {
        console.log(books)
        this.setState({ books })
    })
  }

  render() {
    return (
      <div>
       <h2>Book Results</h2>
       <h3>title: {this.state.books[0] && this.state.books[0].title}</h3>
       <h3>author: {this.state.books[0] && this.state.books[0].authors[0]}</h3>
       <div className="book-shelf-changer">
         <h4>Hi</h4>
         <select>
           <option value="none" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
         </select>
        </div>

        <div>
        <h3>title: {this.state.books[1] && this.state.books[1].title}</h3>
        <h3>author: {this.state.books[2] && this.state.books[1].authors[1]}</h3>
        </div>

        <div>
        <h3>title: {this.state.books[2] && this.state.books[2].title}</h3>
        <h3>author: {this.state.books[2] && this.state.books[2].authors[2]}</h3>
        </div>

        <div>
        <h3>title: {this.state.books[3] && this.state.books[3].title}</h3>
        <h3>author: {this.state.books[3] && this.state.books[3].authors[3]}</h3>
        </div>

        <div>
        <h3>title: {this.state.books[4] && this.state.books[4].title}</h3>
        <h3>author: {this.state.books[4] && this.state.books[4].authors[4]}</h3>
        </div>

      </div>
    )
  }
}

export default BookResults;
