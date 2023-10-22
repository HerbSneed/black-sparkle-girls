import React, { useState } from 'react';

function Synopsis() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const synopsisContent = `
    The Black Sparkle Girls is an inspirational new children's show dedicated to spreading knowledge and empowering young black minds. It follows the adventures of four sisters; Jade, Daijah, Catrina, and Mariah Sparkle who are scientists teaching STEM, black history, civil rights, etc. from their home basement.
    
    In an energetic blend of music, comedy, and education, the Sparkle sisters engage with their young audience through sing-along nursery rhymes and interactive history lessons. Each show culminates in an uplifting concert performance where the girls summarize the episode's key teachings through song and dance.
    
    The Black Sparkle Girls are on a mission to honor the legacy of the four little girls who were killed in the 16th Street Baptist Church bombing on September 15, 1963, in Birmingham, Alabama, as well as the fifth girl who miraculously survived the blast. The show also memorializes the two young boys shot that same tragic day in Birmingham. By promoting education and equality, it aims to inspire the next generation of black scientists, inventors, and leaders.
    
    With their intelligence, charm, and passion for helping others, the Sparkle sisters are role models, showing all children the wonders of science and the power we each have to change the world. The Black Sparkle Girls bring fun and smiles to essential conversations about diversity acceptance, and working together to build a better future.
  `;

  const displayedContent = isExpanded ? synopsisContent : synopsisContent.slice(0,314);

  return (
    <div
      id="synopsis-section"
      className="bg-bgsBgPurple w-screen py-2 flex flex-col justify-center items-center relative"
    >
      <h2 className="drop-shadow-md text-white text-center text-5xl font-gloria font-bold ">
        <span className="text-bgsBgBlue">S</span>
        <span className="text-bgsBgGreen">y</span>
        <span className="text-bgsBgOrange">n</span>
        <span className="text-bgsBgYellow">o</span>
        <span className="text-bgsBgRed">p</span>
        <span className="text-bgsBgGreen">s</span>
        <span className="text-bgsBgBlue">i</span>
        <span className="text-bgsBgRed">s</span>
      </h2>

      <p className="text-white text-center -mt-3 drop-shadow-md mx-4 text-xl">
        {displayedContent.split("\n").map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>
        ))}
      </p>

      {!isExpanded && (
        <button
          className="text-blue-500 cursor-pointer"
          onClick={handleShowMore}
        >
          Read More
        </button>
      )}

      {isExpanded && (
        <button
          className="text-blue-500 cursor-pointer"
          onClick={handleShowMore}
        >
          Read Less
        </button>
      )}
      <div className="gradient-border_2"></div>
    </div>
  );
}

export default Synopsis;
