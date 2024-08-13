import PropTypes from "prop-types";
import Video from "./Video";

const VideoList = ({ videos, filteredVideoData }) => {
  const count = videos.length;
  const countFilter = filteredVideoData.length;
  let heading = "no videos found";
  if (count > 0) {
    const noun = count >= 1 ? "videos" : "video";
    const filter = countFilter >= 1 ? "videos" : "video";
    heading = `${count} ${noun}`;
    heading = `${countFilter} ${filter}`;
  }
  return (
    <div>
      <h2>{heading}</h2>
      <div className="flex flex-col gap-5 mt-2">
        {filteredVideoData
          ? filteredVideoData.map((video, index) => (
              <Video key={index} video={video} />
            ))
          : videos.map((video, index) => <Video key={index} video={video} />)}
      </div>
    </div>
  );
};
VideoList.propTypes = {
  videos: PropTypes.array,
  filteredVideoData: PropTypes.array,
};

export default VideoList;
