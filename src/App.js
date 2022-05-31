import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import {LandingPage} from "./page";

const guestList = [
  "Максим и Дарья",
  "Лена и Рома",
  "Александр и Анастасия",
  "Алексей и Вироника",
  "Владимир и Аня",
]

function App() {
  const generatePages = guestList.map((item, index) => {
    return (
      <Route key={index} path={`/${index}`} element={<LandingPage guestNames={item} />} />
    )
  })

  return (
    <HashRouter>
        <Routes>
          <Route path='/' element={<LandingPage guestNames="Максим и Дарья" />}/>
          {generatePages}
        </Routes>
    </HashRouter>
    )
}

export default App;
