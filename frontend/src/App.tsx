import Navbar from "./components/fotter";

function App() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "80%",
          flex: 0.2,
          height: "100px",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <img
          style={{ width: "80%", height: "30%" }}
          className="h-auto max-w-full"
          src="https://sushilbhattarai.info.np/static/media/4.d5497b9e379b3895080b.jpg"
          alt="image description"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <p>Hello</p>
      </div>
    </div>
  );
}

export default App;
