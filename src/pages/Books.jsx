import { Col, Row } from "antd";
import React from "react";
import { listBooks } from "../services/books/listBooks";
import BookCard from "../components/BookCard";
import { BOOK_DETAILS } from "../routes/appUrls";
import { useNavigate } from "react-router-dom";

function Books() {
  const [books, setBooks] = React.useState([]);
  const navigate = useNavigate();

  const listOfBooks = async () => {
    try {
      const res = await listBooks();
      setBooks(res);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  const handleShowBookDetails = (data) => {
     navigate(BOOK_DETAILS(data.id))
  }

  React.useEffect(() => {
    listOfBooks();
  }, []);

  return (
    <div className="books-container">
      <h1 style={{ color: 'var(--color-primary)'}}>Books</h1>
      <Row
        gutter={[
          { xs: 8, sm: 12, md: 16, lg: 16, xl: 16 },
          { xs: 8, sm: 12, md: 16, lg: 16, xl: 16 },
        ]}
      >
        {books.map((book) => (
          <Col key={book.id} xs={12} sm={8} md={6} lg={4} xl={4}>
            <BookCard book={book} onClick={handleShowBookDetails}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Books;
