import "./listStyles.css";
import imgTest from "./waterFall.jpg";
import VideoComponent from "./component/video";

function App() {
  const vidStyle = { width: 100 + "%", height: 100 + "vh" };
  const docStyle = {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "gray",
  };
  const navStyle = {
    display: "grid",
    gridTemplateRow: "1fr",
    gridTemplateColumn: "repeat(2,1fr)",
    columnGap: 5 + "rem",
  };
  const logoStyle = {
    gridRow: "1",
    gridColumn: "1/1",
    display: "flex",
    justifyContent: "space-around",
    margin: 30 + "px",
  };
  const packageStyle = {
    gridRow: "1",
    gridColumn: "2/2",
    display: "flex",
    justifyContent: "space-between",
    margin: 30 + "px",
  };
  const aStyle = { color: "white", fontSize: 17 + "px" };
  const aLogoStyle = { color: "yellow", fontSize: 20 + "px" };
  return (
    <>
      <div style={docStyle}>
        <img
          src={imgTest}
          style={{
            position: "absolute",
            top: "0",
            zIndex: 0,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <nav style={navStyle}>
          <div className="logo" style={logoStyle}>
            <a style={aLogoStyle}>UGSTICKS</a>
          </div>
          <div className="packages" style={packageStyle}>
            <a style={aStyle}>Home</a>
            <a style={aStyle}>Biography</a>
            <a style={aStyle}>Discography</a>
            <a style={aStyle}>Events</a>
            <a style={aStyle}>Tours</a>
            <a style={aStyle}>videos</a>
            <a style={aStyle}>Blogs</a>
            <a style={aStyle}>Lyrics</a>
            <a style={aStyle}>Store</a>
            <a style={aStyle}>contact</a>
            <a style={aStyle}>Bookings</a>
          </div>
        </nav>
      </div>
      <VideoComponent props={"./samplevideo.mp4"} />
      <VideoComponent props={"./dummyvideo.mp4"} />
    </>
  );
}
export default App;
