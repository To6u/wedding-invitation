import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";
import {LandingPage} from "./page";

const TextForGuests = [
"Это незабываемое событие мы хотим отметить в кругу самых близких для нас людей. Приглашаем разделить этот счастливый день вместе с нами!",
"Да, вы правы, все пропало! Она смогла меня охомутать, у нее получилось! Спасайте! SOS! Своего пропавшего друга вы легко узнаете – я буду в черном костюме, а захватчик в шикарном белом платье. Посмеяться над моей загубленной холостяцкой свободной жизнью вы сможете в «Банкетном доме» по адресу ул. Советская, 104. Приходите обязательно, всем будет весело, погибать будем с музыкой!"
]

function App() {
  const generatePages = TextForGuests.map((text, index) => {
    return (
      <Route key={index} path={`/${index}`} element={<LandingPage text={text} />} />
    )
  })

  return (
    <HashRouter>
        <Routes>
          {generatePages}
        </Routes>
    </HashRouter>
    )
}

export default App;
