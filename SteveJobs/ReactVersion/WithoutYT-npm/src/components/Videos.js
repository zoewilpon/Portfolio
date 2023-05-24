const Videos = ({ videos }) => { // we are passing in the videos object from the App.js file. This acting as our props

    return(
        <div>
            <h1>Check out these Steve Jobs Videos</h1>
            {Object.values(videos).map((video) => (   // we are using the Object.values method to get the values of the videos object. We are then mapping over the values, and returning a div for each video.
                <div key={video.title}> {/* // we are using the video title as the key for each div. This is because each video title is unique. */}
                    <h2>{video.title}</h2> {/* // we are displaying the video title */}
                    <iframe // this is an iframe tag, which allows us to embed a video from youtube into our react app. 
                        title = {video.title} // the title attribute is where we are passing in the title of the video.(this wont be displayed on the page, but it is important for accessibility purposes/ the iframe tag requires a title)
                        width="560"
                        height="315"
                        src={video.link} // the src attribute is where we are passing in the link to the video. 
                        allowFullScreen
                    />
                </div>
            ))}
        </div>
    );
}


export default Videos;