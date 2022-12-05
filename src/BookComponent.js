import React, {Component} from 'react';

class Book extends Component {

constructor(){
    super();

    this.state = {
     bookList : [
         {"bookName": "Java", "author": "Ajay"},
         {"bookName": "React", "author": "John"}
     ]   
    };
    this.addBook = this.addBook.bind(this);
}
addBook(){
this.setState({bookList: [{"bookName": "React1", "author": "John"}]});
}

render(){
    return(
        <div>
        <h1> Available Book List </h1>
        {
            this.state.bookList.map( (book) =>  <BookDetails bookDetails={book} />)
        }
        <button type='submit' onClick={this.addBook}>Add Book</button>
        </div>
    );
}

}



class BookDetails  extends React.Component {
    render(){
        return (
            <ul> <li> <h3>{this.props.bookDetails.bookName} - {this.props.bookDetails.author}</h3></li></ul>
        );
    };

}


export default Book;