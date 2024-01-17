interface videoProps {
  props: string;
}
function VideoComponent({ props }: videoProps) {
  var videoSource = import.meta.env.VITE_API_HOST + props;
  console.log(videoSource);
  console.log(videoSource);
  return (
    <>
      <video autoPlay muted style={{ width: "100%", height: "300px" }}>
        <source src={props} type="video/mp4"></source>
        browser does not support videos?
      </video>
    </>
  );
}
export default VideoComponent;
