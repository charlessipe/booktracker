
import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI';

class Book extends React.Component {
  state = {
    currentlyReading: "false",
    wantToRead: "false",
    read: "false"
  }

  componentDidMount() {
    BooksAPI.search("Astronomy",3).then((books) => {
        console.log(books)
        //this.setState({ books })
    })
  }

  render() {
    return (
      <div>
       <h2>My Book Component</h2>
       <h3>{this.props.image}</h3>
       <h3>{this.props.title}</h3>
       <h3>{this.props.author}</h3>
       <h4>currentlyReading: {this.state.currentlyReading}</h4>
       <h4>wantToRead: {this.state.wantToRead}</h4>
       <h4>read: {this.state.read}</h4>
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

export default Book;
