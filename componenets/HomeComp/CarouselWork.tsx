import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { workImg } from "../imagesData";
import Carousel from "react-elastic-carousel";
import { CarouselMainProps } from "../PropsInterface";
const CarouselWork = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <Carousel
        style={{ color: "gray" }}
        breakPoints={breakPoints}
        showArrows={false}
        enableAutoPlay={true}
      >
        {workImg.map((val, index) => {
          return (
            <Image
              key={index}
              src={val.src}
              alt="slide"
              width="200px"
              height="200px"
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselWork;
