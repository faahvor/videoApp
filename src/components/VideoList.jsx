 import React from "react"
 import Video from "./Video"
 const VideoList =({videos})=>{
    const count  = videos.length 
    let heading = "no videos found"
    if (count > 0){
        const noun = count >= 1 ? "videos":"video";
         heading =`${count} ${noun}`
    }
    return(
<div> 
    <h2>{heading}</h2>
    <div className="flex flex-col gap-5 mt-2">
        {
            videos.map((video,index)=>(
                <Video key={index} video={video}/>
            ))
        }
    </div>
</div>
    )
}
export default VideoList