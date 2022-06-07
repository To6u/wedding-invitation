import { FormApprove } from './form';

export const LandingPage = ({guestNames}) => {
    console.log(guestNames);
    return (
        <div className="App">
          <header className="App-header">
            <div className="content">
              <h1>{guestNames}</h1>
              <p className="description">Нам очень хочется, чтобы в этот счастливый момент нас окружали самые дорогие и близкие люди, а это значит, что мы будем рады видеть Вас на торжестве, посвященном созданию нашей Семьи</p>
              <p className="place">которое состоится: <br /><b> 3 июля 2022 года</b></p>
    
              <div className="arrow-down" />
            </div>
          </header>
    
          <section className="programm-day">
            <h2>ПРОГРАММА ДНЯ</h2>
            <div className="subtitle">Пятница, 3 Июля</div>
    
            <ul className="programm-list">
              <li>
                <span className="time">16 : 00</span>
                <span className="image" />
                <span className="description">Сбор гостей</span>
              </li>
              <li>
                <span className="time">16 : 30</span>
                <span className="image" />
                <span className="description">Церемония бракосочетания</span>
              </li>
              <li>
                <span className="time">17 : 00</span>
                <span className="image" />
                <span className="description">Торжественный банкет</span>
              </li>
            </ul>
          </section>
    
          <section className='place'>
            <h2>МЕСТО ПРОВЕДЕНИЯ</h2>
            <div className="subtitle">Свою свадьбу мы решили отметить по адресу: с.Верх-Иньва, ул.Восточная, д.20 <br /> Мы подготовили для Вас карту, что бы Вы точно добрались и порадовали нас своим присутствием</div>
            <iframe className='place-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.7571150774221!2d56.23383274344146!3d58.01644214596169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8c72090293005%3A0xe9f8205e1cd8da5e!2z0KHQutCy0LXRgCDQvdCwINCh0L7QsdC-0YDQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2sru!4v1653893984265!5m2!1sru!2sru" height="450" style={{border : 0, borderRadius: "4px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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