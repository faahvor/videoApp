import SearchInput from "./components/SearchInput";
import VideoList from "./components/VideoList";
import videos from "./assets/mockData";
import Person from "./components/Person";

function App() {
  const loggedIn = true;
  return (
    <div>
      {loggedIn ? (
        <div className="p-4">
          <header className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">React Videos</h1>
            <h4 className="text-lg">A brief history of React</h4>
          </header>
          <SearchInput />
          <VideoList videos={videos} />
        </div>
      ) : (
        <Person/>
      )}
    </div>
  );
}

export default App;
