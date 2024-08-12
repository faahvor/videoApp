import PropTypes from 'prop-types';
const ThumbNail = ({ video }) => {
  return (
    <video
      className="h-20 w-36 rounded-lg md:rounded-xl  object-cover"
      src={video.url}
      type="video/mp4"
      controls
      autoPlay
      loop
    ></video>
  );
};
ThumbNail.propTypes={
  video: PropTypes.object,
}
export default ThumbNail;
