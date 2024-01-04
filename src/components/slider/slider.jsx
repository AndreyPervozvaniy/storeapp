import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sliderData } from "../../utils/slidercontent";

const Slider = () => {
  return (
    <Flex w="100%" mt={"68px"} color="white">
      <Carousel
        infiniteLoop
        showArrows={false}
        autoPlay
        interval={5000}
        emulateTouch
        showThumbs={false}
        showStatus={false}
      >
        {sliderData.map((slide) => {
          return (
            <Image
              key={slide.id}
              src={slide.image}
              height="auto"
              width="100%"
            />
          );
        })}
      </Carousel>
    </Flex>
  );
};

export default Slider;
