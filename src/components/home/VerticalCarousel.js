import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = ({ slides, goToSlide, showNavigation, offsetRadius, animationConfig }) => {
  const [index, setIndex] = useState(0);
  console.log(slides)
  const modBySlidesLength = (index) => {
    return mod(index, slides.length);
  };

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const getPresentableSlides = () => {
    let offsetRadiusClamped = clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -offsetRadiusClamped; i < 1 + offsetRadiusClamped; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  };

  const moveSlide = (direction) => {
    setIndex((prevIndex) => modBySlidesLength(prevIndex + direction));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        moveSlide(-1);
      }
      if (event.keyCode === 40) {
        moveSlide(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moveSlide]);

  return (
    <React.Fragment>
      <Wrapper>
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.id}
            name={slide.name}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </Wrapper>
      {showNavigation && (
        <NavigationButtons>
          <NavBtn onClick={() => moveSlide(1)}>&#8593;</NavBtn>
          <NavBtn onClick={() => moveSlide(-1)}>&#8595;</NavBtn>
        </NavigationButtons>
      )}
    </React.Fragment>
  );
};

VerticalCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      year: PropTypes.number,
      location: PropTypes.arrayOf(PropTypes.string),
      coordinates: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
      image: PropTypes.string,
      attractions: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string,
      visitors: PropTypes.number,
      pointValue: PropTypes.number,
      wildlife: PropTypes.arrayOf(PropTypes.string),
      quizQuestions: PropTypes.object,
      gameWon: PropTypes.bool,
      description: PropTypes.string,
      favorited: PropTypes.bool,
    })
  ).isRequired,
  goToSlide: PropTypes.number,
  showNavigation: PropTypes.bool,
  offsetRadius: PropTypes.number,
  animationConfig: PropTypes.object,
};

VerticalCarousel.defaultProps = {
  offsetRadius: 2,
  animationConfig: { tension: 120, friction: 14 },
};

export default VerticalCarousel;
