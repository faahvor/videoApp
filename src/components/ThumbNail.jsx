import React from "react"

const ThumbNail =({video})=>{
    return(
      <video className="h-20 w-36" src={video.url} type="video/mp4" controls ></video>
    )
}
export default ThumbNail