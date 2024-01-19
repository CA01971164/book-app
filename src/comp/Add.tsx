import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchProps from "../type/FetchProps";

const Add: React.FC<FetchProps> = ({ fetchBooks }) => {
  const [newBook, setNewBook] = useState({
    タイトル: "",
    著者: "",
    出版社: "",
    出版年: "",
  });
  let navigate = useNavigate();

  // 入力のフィールドが変わるたびに呼び出させれる関数
  const handleChange = (e: any) => {
    setNewBook({ ...newBook, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/books`, newBook);
      await fetchBooks(); // データを再フェッチ
      navigate(`/`);
      console.log("通過しましたよ");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="タイトル">題名</label>
        <input
          type="text"
          id="タイトル"
          value={newBook.タイトル}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="著者">著者</label>
        <input
          type="text"
          id="著者"
          value={newBook.著者}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="出版社">出版社</label>
        <input
          type="text"
          id="出版社"
          value={newBook.出版社}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="出版年">出版年</label>
        <input
          type="number"
          id="出版年"
          value={newBook.出版年}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">追加</button>
      </div>
    </form>
  );
};

export default Add;
