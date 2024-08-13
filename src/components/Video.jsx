import LikeButton from "./LikeButton";
import ThumbNail from "./ThumbNail";
import PropTypes from "prop-types";

const Video = ({ video }) => {
  return (
    <div className="flex gap-3">
      <ThumbNail video={video} />
      <a href={video.url} className="flex w-full flex-col gap-1">
        <h3 className="text-base md:text-lg font-semibold">{video.name}</h3>
        <p className="text-sm md:text-base">{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
};
Video.propTypes = {
  video: PropTypes.object,
};
export default Video;
