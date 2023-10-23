import PilotVid from "../assets/black_sparkle_girls.mp4";

function Pilot() {
  return (
    <div
      id="pilot-section"
      className="bg-bgsBg w-full flex py-3 flex-col justify-center items-center relative"
    >
      <h1 className="drop-shadow-md w-full text-[43px] leading-[43px] sm:leading-[50px] sm:text-[55px] md:text-[65px] md:leading-[60px] lg:text-[85px] lg:leading-[80px] xl:leading-[90px] xl:text-[90px] 2xl:text-[100px] 2xl:leading-[100px] xl:w-3/4 text-center md:mt-2 lg:mt-4 text-white font-gloria">
        <span className="text-bgsBgBlue">T</span>
        <span className="text-bgsBgPurple">h</span>
        <span className="text-bgsBgOrange">e</span>
        <span className="text-bgsBgYellow tracking-[-10px]"> </span>
        <span className="text-bgsBgRed">C</span>
        <span className="text-bgsBgGreen">a</span>
        <span className="text-bgsBgBlue">s</span>
        <span className="text-bgsBgPurple">e</span>
        <span className="text-bgsBgOrange"> </span>
        <span className="text-bgsBgYellow">o</span>
        <span className="text-bgsBgRed">f</span>
        <span className="text-bgsBgGreen tracking-[-10px]"> </span>
        <span className="text-bgsBgBlue">t</span>
        <span className="text-bgsBgPurple">h</span>
        <span className="text-bgsBgOrange">e</span>
        <span className="text-bgsBgYellow tracking-[-10px]"> </span>
        <span className="text-bgsBgRed">I</span>
        <span className="text-bgsBgGreen">n</span>
        <span className="text-bgsBgBlue">v</span>
        <span className="text-bgsBgPurple">i</span>
        <span className="text-bgsBgOrange">s</span>
        <span className="text-bgsBgYellow">i</span>
        <span className="text-bgsBgRed">b</span>
        <span className="text-bgsBgGreen">l</span>
        <span className="text-bgsBgBlue">e</span>
        <span className="text-bgsBgPurple tracking-[-10px]"> </span>
        <span className="text-bgsBgOrange">F</span>
        <span className="text-bgsBgYellow">o</span>
        <span className="text-bgsBgRed">r</span>
        <span className="text-bgsBgGreen">c</span>
        <span className="text-bgsBgBlue">e</span>
      </h1>
      <div className="mt-0 px-3 md:px-6">
        <video
          className="rounded-xl mt-4 mb-4"
          width="1080"
          height="720"
          controls
          poster="../src/assets/bgsScreenshot.png"
        >
          <source src={PilotVid} type="video/mp4" />
        </video>
      </div>
      <div className="gradient-border_1"></div>
    </div>
  );
}

export default Pilot;
