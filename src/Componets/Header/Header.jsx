import "./_header.scss";

import white_logo from "../../images/logo/white_logo.png";
import burger_logo from "../../images/logo/burger_header_logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="box_background"></div>
      <div className="header_block">
        <div className="container">
          <div className="header_box">
            <img src={white_logo} alt="Logo" className="header_logo" />
            <div className="header_title_box">
              <img src={burger_logo} alt="фото" className="header_box_img" />
              <div className="header_title_box_title">
                <h1 className="header_title_main">
                  Только самые
                  <br /> <span>сочные бургеры!</span>
                </h1>
                <h3 className="header_title_advertising">
                  Бесплатная доставка от 599₽
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
