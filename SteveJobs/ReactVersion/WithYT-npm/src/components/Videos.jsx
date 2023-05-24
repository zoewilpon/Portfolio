import React from "react"
import YouTube from "react-youtube"

const Videos = () => {

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1
        }}

    return (
        <>
            <h1>Check out these Steve Jobs Videos</h1>
            <h2>Steve Job's Vision of the World</h2>
            <YouTube 
                videoId="jcFbGsl8DDI"
                opts={opts}
            />
            <h2>Steve Jobs on Microsoft</h2>
            <YouTube 
                videoId="upzKj-1HaKw"
                opts={opts}
            />
            <h2>Steve Jobs on programming</h2>
            <YouTube 
                videoId="5fI3zz2cp3k"
                opts={opts}
            />
        </>
    )

}

export default Videos