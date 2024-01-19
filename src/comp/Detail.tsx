import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Book from "../type/Book";
import axios from "axios";

const Detail = () => {
  let { id } = useParams<{ id: string }>();
  let navigate = useNavigate();
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("書籍の詳細の取得中にエラーが発生しました", error);
      }
    };

    fetchBook();
  }, [id]);
  const backNavigate = () => {
    navigate("/");
  };

  if (!book) {
    return <div>読み込み中...</div>;
  }

  return (
    <div>
      <h2>書籍詳細</h2>
      <div>
        <strong>題名:</strong> {book.タイトル}
      </div>
      <div>
        <strong>著者:</strong> {book.著者}
      </div>
      <div>
        <strong>出版社:</strong> {book.出版社}
      </div>
      <div>
        <strong>出版年:</strong> {book.出版年}
      </div>
      <div>
        <button>この項目を削除する</button>
      </div>
      <div>
        <button onClick={backNavigate}>戻る</button>
      </div>
    </div>
  );
};

export default Detail;
