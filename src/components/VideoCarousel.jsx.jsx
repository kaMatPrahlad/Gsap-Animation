import { highlightsSlides } from "../constants";

const VideoCarousal = () => {
  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => {
          <div key={list.id} id="Slider">
            <div className="video-carousel_container"></div>
          </div>;
        })}
      </div>
    </>
  );
};

export default VideoCarousal;
