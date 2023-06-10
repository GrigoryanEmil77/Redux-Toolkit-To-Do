import { useState } from 'react';
import Footer from './features/todolist/Footer';
import Header from './features/todolist/Header';
import { Todos } from './features/todolist/Todos';

function App() {
  const [text, setText] = useState("");
  return (
   <div>
        <Header text={text} setText={setText}/>
        <Todos text={text} setText={setText}/>
        <Footer/>
        </div>
  )
}

export default App;
