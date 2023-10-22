import mainImage from "../assets/blacksparklegirls.png";
  
function Landing() {
  return (
    <div className="relative bg-bgsBg py-2 flex flex-col justify-center items-center">
      <div className="gradient-border_3"></div>
      <h2 className="font-extrabold text-center text-[40px] sm:text-[60px] font-gloria drop-shadow-md">
        <span className="text-bgsBgBlue">B</span>
        <span className="text-bgsBgPurple">l</span>
        <span className="text-bgsBgOrange">a</span>
        <span className="text-bgsBgYellow">c</span>
        <span className="text-bgsBgRed">k</span>
        <span className="text-bgsBgGreen"> </span>
        <span className="text-bgsBgOrange">S</span>
        <span className="text-bgsBgBlue">p</span>
        <span className="text-bgsBgPurple">a</span>
        <span className="text-bgsBgOrange">r</span>
        <span className="text-bgsBgYellow">k</span>
        <span className="text-bgsBgRed">l</span>
        <span className="text-bgsBgGreen">e</span>
        <span className="text-bgsBgBlue"> </span>
        <span className="text-bgsBgRed">G</span>
        <span className="text-bgsBgBlue">i</span>
        <span className="text-bgsBgPurple">r</span>
        <span className="text-bgsBgOrange">l</span>
        <span className="text-bgsBgYellow">s</span>
      </h2>
      <img className="drop-shadow-md mb-3" src={mainImage} />
      <div className="gradient-border_1"></div>
    </div>
  );
}

export default Landing;
