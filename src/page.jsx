import { FormApprove } from './form';

export const LandingPage = ({text}) => {

    return (
        <div className="App">
          <header className="App-header">
            <div className="content">
              <h1>Дорогие наши и любимые! <br /> Мы женимся!</h1>
              <div className='description'>{text}</div>
    
              <div className="arrow-down" />
            </div>
          </header>
    
          <section className="programm-day">
            <h2>ПРОГРАММА ДНЯ</h2>
            <div className="subtitle">Пятница, 19 августа 2022 года</div>
    
            <ul className="programm-list">
              <li>
                <span className="time">17 : 00</span>
                <span className="image" />
                <span className="description">Сбор гостей</span>
              </li>
              <li>
                <span className="time">17 : 30</span>
                <span className="image" />
                <span className="description">Церемония бракосочетания</span>
              </li>
              <li>
                <span className="time">18 : 00</span>
                <span className="image" />
                <span className="description">Торжественный банкет</span>
              </li>
              <li>
                <span className="time">00 : 00</span>
                <span className="image" />
                <span className="description">Окончание мероприятия </span>
              </li>
            </ul>
          </section>
    
          <section className='place'>
            <h2>МЕСТО ПРОВЕДЕНИЯ</h2>
            <div className="subtitle">Свою свадьбу мы решили отметить по адресу: г. Пермь, ул. Советская, 104, «Банкетный дом» <br /> Мы подготовили для Вас карту, что бы Вы точно добрались и порадовали нас своим присутствием</div>
            <iframe className='place-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2113.660699480921!2d56.21150681601941!3d58.010513281216895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8c78cc22fdd6b%3A0x6cd0465af0c56190!2z0JHQsNC90LrQtdGC0L3Ri9C5INC00L7QvA!5e0!3m2!1sru!2sru!4v1655037110231!5m2!1sru!2sru" height="450" style={{border : 0, borderRadius: "4px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </section>
    
          <section className='form-approve'>
            <div className='image' />
            <div className='form-container'>
              <h2>ПОДТВЕРДИТЕ, ПОЖАЛУЙСТА, СВОЁ ПРИСУТСТВИЕ НА ТОРЖЕСТВЕ</h2>
              <div className="subtitle">Будем ждать ответ до 01/07/2020</div>
              <FormApprove />
            </div>
          </section>
          <section>
            <h2 className='title-last-message'>МЫ БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ ВАС!</h2>
          </section>
        </div>
      );
}