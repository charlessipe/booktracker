import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './book'
import BookResults from './bookresults.js'
import CurrentlyReading from './currentlyreading.js'
import WantToRead from './wanttoreadsoon.js'
import AlreadyRead from './alreadyread.js'

class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Ready Player One",
      author: "Charlie Sipe",
      /**
       * TODO: Instead of using this stat er's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: true,
      searchInput: "web development",
      selectedBookState: "selectedBookState"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedBookState: event.target.value});
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input onChange={(e) => this.setState({ searchInput: e.target.value })} type="text" placeholder="Search by title or author"/>
                {this.state.searchInput}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              <p>Place search results books here!</p>
              <BookResults query={this.state.searchInput} />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads {this.state.searchInput} </h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading/>
                <WantToRead/>
                <AlreadyRead/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
