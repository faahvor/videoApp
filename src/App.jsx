import SearchInput from "./components/SearchInput";
import VideoList from "./components/VideoList";
import videos from "./assets/mockData";
import Person from "./components/Person";
import { useEffect, useState } from "react";

function App() {
  const loggedIn = true;
  const [searchInput, setSearchInput] = useState("");
  const [videoData, setVideoData] = useState(videos);
  const [filteredVideoData, setFilteredVideoData] = useState([]);

  useEffect(() => {
    const filteredVideo = videoData.filter((video) =>
      video.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredVideoData(filteredVideo);
    console.log(filteredVideo);
  }, [searchInput]);
  return (
    <div>
      {loggedIn ? (
        <div className="p-4">
          <header className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">React Videos</h1>
            <h4 className="text-lg">A brief history of React</h4>
          </header>
          <SearchInput
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <VideoList videos={videoData} filteredVideoData={filteredVideoData} />
        </div>
      ) : (
        <Person />
      )}
    </div>
  );
}

export default App;
