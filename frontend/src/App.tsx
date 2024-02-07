import Navbar from "./components/NavBar";
import VerticalAbout from "./components/About";
import Footer from "./components/footer";
import "./index.css";
function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          marginTop: 20,
          flex: 1,
          width: "100vw",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 0.6,
            marginRight: 20,
          }}
        >
          <div style={{}}>
            {" "}
            <img
              style={{
                objectFit: "cover",
              }}
              src="https://kalikaschoolbtl.edu.np/public/storage/sliders/August2021/UZEJJPqEU6JJmUYyzuwF.jpg"
              alt="image description"
            />
          </div>
        </div>
        <div
          style={{
            // position: "absolute",
            // top: "20vh",
            // height: "10vh",
            // right: "20vh",
            // width: "40vh",
            flex: 0.1,
          }}
        >
          {" "}
          <VerticalAbout />
        </div>
      </div>
      <div
        style={{
          marginTop: 100,
        }}
      >
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default App;
