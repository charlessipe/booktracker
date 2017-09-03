import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';

class BookResults extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.search("Web Development",3).then((books) => {
        console.log(books)
        //this.setState(books)
        this.setState({ books })
    })
  }

  render() {
    return (
      <div>
       <h2>Book Results</h2>
       <h3>title: {this.state.books[1]}</h3>
       <h3>author: </h3>
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
      </div>
    )
  }
}

export default BookResults;
