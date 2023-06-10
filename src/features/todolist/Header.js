import { Button, TextField } from "@mui/material";
import { useDispatch,} from "react-redux";
import { addTodo, } from "./todoSlice";
import "./Header.css"

function Header({text,setText}){
    const dispatch = useDispatch();
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && text.trim()) {
          dispatch(addTodo(text));
          setText("");
        }
      };
    
    return(
    <div>
        <div className="cont">
        <TextField
          sx={{ width: "350px" }}
          value={text}
          onKeyDown={handleKeyPress}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          sx={{ width: "200px", height: "57px", background: "black" }}
          onClick={() => {
            if (text.trim()) {
              dispatch(addTodo(text));
              setText("");
            }
          }}>
          ADD
        </Button>
      </div>
    </div>
    )
}
export default Header