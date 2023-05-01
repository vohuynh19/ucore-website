import Plyr from "plyr-react";

const Video = () => {
  return (
    <Plyr
      source={{
        type: "video",
        sources: [
          {
            provider: "youtube",
            src: "https://youtu.be/gu_F25rcqnI",
            type: "video/mp4",
          },
        ],
      }}
      options={{
        controls: [
          "rewind",
          "play",
          "fast-forward",
          "progress",
          "current-time",
          "duration",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
        },
      }}
    />
  );
};

export default Video;
