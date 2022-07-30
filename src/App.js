import "./App.css";
import background from "./assets/video/background.mp4";
import pic from "./assets/pic/pic.jpg";

function App() {
  return (
    <>
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

      <div className="App">
       
        <div style={{margin:25}}>
          <h1>امیرحسین جلالی منش</h1>
          <h3>طراح سایت UI-UX</h3>
          <h3> برنامه نویس JavaScript</h3>
          <h3>متخصص React - React Native</h3>
          <div>
            
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" onClick={()=>window.open("https://www.linkedin.com/in/amirhosein-jalalimanesh-9aa629244/")}></i>
            <i className="fa fa-github fa-2x" aria-hidden="true" onClick={()=>window.open("https://github.com/mrjlm70")}></i>
            <i className="fa fa-phone-square fa-2x" aria-hidden="true" ></i>
            <i className="fa fa-envelope fa-2x" aria-hidden="true" onClick={()=>window.open("mailto:[mr.jlm1370@gmail.com]")}></i>
            <i className="fa fa-whatsapp fa-2x" onClick={()=>window.open("https://wa.me/989126098648")} ></i>
            <i className="fa fa-telegram fa-2x" aria-hidden="true" onClick={()=>window.open("https://t.me/mrjlm70")}></i>
          </div>
        </div>
         <img
          src={pic}
          alt=""
          className="img-fluid rounded"
          style={{
            width: 300,
            height: 300,
            border: `10px solid white`,
            borderRadius: 1000,
            margin:25
          }}
        />
      </div>
    </>
  );
}

export default App;
