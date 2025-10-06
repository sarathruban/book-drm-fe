import React from "react";
import { individualBooksApi } from "../services/books/listBooks";

export default function IndividualBooks() {
  const [bookData, setBookData] = React.useState({});

  const getIndividualBook = () => {
    try {
      const res = individualBooksApi();
      setBookData(res);
    } catch (error) {}
  };

  React.useEffect(() => {
    getIndividualBook();
  }, []);
  return;
  <div>
    
  </div>;
}
