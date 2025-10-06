import { Image } from "antd";
import "../components/Styles/BookDetailCard.css";
import AppButton from "./Button";
import { ReadFilled } from "@ant-design/icons";

export default function BookDetailCard({ bookData }) {
  const { cover, title, author, summary, language } = bookData || {};

  return (
    <div className="book-detail-card">
      <div className="book-image">
        <Image width={220} src={cover} alt={title} />
      </div>

      <div className="book-info">
        <h1 className="book-title">{title}</h1>
        <h4 className="book-author">by {author}</h4>
        <strong>Summary:</strong>
        <p className="book-summary">{summary}</p>
        <p className="book-meta">
          <strong>Language:</strong> {language}
        </p>
        <AppButton text={"Read"} style={{ width: 120, marginTop: 10 }}  icon={<ReadFilled  style={{ fontSize: 20 }}/>}/>
      </div>
    </div>
  );
}
