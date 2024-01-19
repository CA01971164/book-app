import { useNavigate } from "react-router-dom";
import Book from "../type/Book";

// BooksTable コンポーネント
const BooksTable = ({ books }: { books: Book[] }) => {
  // useNavigateは、トップレベルで宣言する必要がある。
  let navigate = useNavigate();

  const addNavigate = () => {
    navigate(`/add`);
  };

  const editNavigate = () => {
    navigate(`/edit`);
  };
  const detailNavigate = () => {
    navigate(`/detail`);
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>題名</th>
            <th>著者</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.ID}>
              <td>{book.タイトル}</td>
              <td>{book.著者}</td>
              <button onClick={editNavigate}>編集</button>
              <button onClick={detailNavigate}>詳細</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNavigate}>追加</button>
    </div>
  );
};

export default BooksTable;
