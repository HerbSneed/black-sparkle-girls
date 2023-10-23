import mainImage from "../assets/blacksparklegirls.png";
  
function Landing() {
  return (
    <div className="relative bg-bgsBg py-4 sm:py-6 md:py-8 lg:py-12 flex flex-col justify-center items-center">
      <div className="gradient-border_3"></div>
      <h2 className="font-extrabold text-center text-[45px] leading-[50px] sm:text-[60px] md:text-[75px] lg:text-[95px] xl:text-[105px] 2xl:text-[115px] font-gloria drop-shadow-md">
        <span className="text-bgsBgBlue">B</span>
        <span className="text-bgsBgPurple">l</span>
        <span className="text-bgsBgOrange">a</span>
        <span className="text-bgsBgYellow">c</span>
        <span className="text-bgsBgRed">k</span>
        <span className="text-bgsBgGreen tracking-[-10px]"> </span>
        <span className="text-bgsBgOrange">S</span>
        <span className="text-bgsBgBlue">p</span>
        <span className="text-bgsBgPurple">a</span>
        <span className="text-bgsBgOrange">r</span>
        <span className="text-bgsBgYellow">k</span>
        <span className="text-bgsBgRed">l</span>
        <span className="text-bgsBgGreen">e</span>
        <span className="text-bgsBgBlue tracking-[-8px]"> </span>
        <span className="text-bgsBgRed">G</span>
        <span className="text-bgsBgBlue">i</span>
        <span className="text-bgsBgPurple">r</span>
        <span className="text-bgsBgOrange">l</span>
        <span className="text-bgsBgYellow">s</span>
      </h2>
      <img className="drop-shadow-md md:mt-3 lg:mt-8 2xl:mt-10" src={mainImage} />
      <div className="gradient-border_1"></div>
    </div>
  );
}

export default Landing;
