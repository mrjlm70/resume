import "./App.css";
import background from "./assets/video/background.mp4";
import pic from "./assets/pic/pic.jpg";

function App() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={background} type="video/mp4" />
      </video>

      <div
        className="container d-grid position-absolute top-50 start-50 translate-middle justify-content-center bg-dark bg-opacity-75 p-3 shadow rounded-3"
        style={{ zIndex: "0" }}
      >
        <div className="row">
          <div className="col-sm-12 col-lg d-flex justify-content-center justify-content-lg-end" >
            <img
              className="rounded-circle user-select-none w-50 "
              src={pic}
              alt=""
              style={{ border: `15px solid royalblue` }}
            />
          </div>

          <div className="col pt-5 text-light" style={{ width: 400 }}>
            <h1 className="user-select-none text-center">امیرحسین جلالی منش</h1>
            <h3 className="user-select-none text-center">طراح سایت UI-UX</h3>
            <h3 className="user-select-none text-center">
              {" "}
              برنامه نویس JavaScript
            </h3>
            <h3 className="user-select-none text-center">
              متخصص React - React Native
            </h3>
            <div className="text-center">
              <i
                className="fa fa-linkedin-square fa-2x"
                aria-hidden="true"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/amirhosein-jalalimanesh-9aa629244/"
                  )
                }
              ></i>
              <i
                className="fab fa-github fa-2x"
                onClick={() => window.open("https://github.com/mrjlm70")}
              ></i>
              <i className="fa fa-phone-square fa-2x"></i>
              <i
                className="fa fa-envelope fa-2x"
                onClick={() => window.open("mailto:[mr.jlm1370@gmail.com]")}
              ></i>
              <i
                className="fab fa-whatsapp fa-2x"
                onClick={() => window.open("https://wa.me/989126098648")}
              ></i>
              <i
                className="fab fa-telegram fa-2x"
                onClick={() => window.open("https://t.me/mrjlm70")}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
