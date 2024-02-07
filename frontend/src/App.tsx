import Navbar from "./components/NavBar";
import VerticalAbout from "./components/About";
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
            flex: 0.7,
            marginRight: 20,
          }}
        >
          <div style={{}}>
            {" "}
            <img
              style={{ height: "70%", width: "60%", position: "fixed" }}
              src="https://sushilbhattarai.info.np/static/media/4.d5497b9e379b3895080b.jpg"
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
    </div>
  );
}

export default App;
