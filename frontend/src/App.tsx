import Navbar from "./components/NavBar";
import VerticalAbout from "./components/About";
function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flex: 1,
          width: "100vw",
          height: "auto",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: 0.7,
          }}
        >
          <img
            className="h-max-[30vh] h-[30vh]"
            src="https://sushilbhattarai.info.np/static/media/4.d5497b9e379b3895080b.jpg"
            alt="image description"
          />
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
