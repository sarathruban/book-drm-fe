import React from "react";
import "../components/Styles/BookCard.css";
import { Card } from "antd";

const { Meta } = Card;

export default function BookCard({ book, onClick }) {
  return (
    <Card
      hoverable
      className="book-card"
      cover={<img alt={book.title} src={book.cover} className="book-cover" />}
      onClick={() => onClick(book)}
    >
      <Meta
        title={<div className="book-title">{book.title}</div>}
        description={<div className="book-author">{book.author}</div>}
      />
    </Card>
  );
}