import LikeButton from "./LikeButton"
import ThumbNail from "./ThumbNail"

const Video =({video})=>{
    return(
        <div className="flex gap-3">
            <ThumbNail video={video}/>
            <a href={video.url} className="flex w-fit flex-col gap-1">
                <h3 className="text-base font-semibold">{video.name}</h3>
                <p>{video.description}</p>
            </a>
            <LikeButton video={video}/>


        </div>
    )
}
export default Video 