import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <ReactPlayer
      url="1.mp4"
      width="400px"
      height="300px"
      playing={true}
      muted={true}
      controls={true}
      loop={true}
    />
  );
}

export default App;
