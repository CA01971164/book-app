import { useNavigate } from "react-router-dom";
import Book from "../type/Book";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface EditProps {
  setUpdTriger: (value: number | ((prevValue: number) => number)) => void;
}

const Edit: React.FC<EditProps> = ({ setUpdTriger }) => {
  // 入力のフィールドが変わるたびに呼び出させれる関数

  const [updBook, setUpdBook] = useState({
    タイトル: "",
    著者: "",
    出版社: "",
    出版年: "",
  });

  let { id } = useParams<{ id: string }>();

  let navigate = useNavigate();

  const handleChange = (e: any) => {
    setUpdBook({ ...updBook, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/books/${id}`, updBook);
      setUpdTriger((old: number) => old + 1); // トリガーを更新
      navigate(`/`);
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
          value={updBook.タイトル}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="著者">著者</label>
        <input
          type="text"
          id="著者"
          value={updBook.著者}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="出版社">出版社</label>
        <input
          type="text"
          id="出版社"
          value={updBook.出版社}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="出版年">出版年</label>
        <input
          type="number"
          id="出版年"
          value={updBook.出版年}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">更新</button>
      </div>
    </form>
  );
};

export default Edit;
