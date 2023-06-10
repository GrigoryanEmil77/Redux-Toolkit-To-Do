import { useSelector } from "react-redux";
import { selectTodo } from "./todoSlice";
import "./Footer.css";

function Footer() {
  const todos = useSelector(selectTodo);
  return (
    <div className="footer">
      <h1>
        {todos.filter((todo) => todo.checked).length}/{todos.length}
        Checked-Count
      </h1>
    </div>
  );
}
export default Footer;
