// import imageSrc from "../images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { CustomCarouselProps } from "../PropsInterface";
const CarouselCustom = (props: CustomCarouselProps) => {
  const image = props.imgSrc;
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        transitionTime={500}
        infiniteLoop={true}
      >
        {image.map((val: any, index: any) => {
          return (
            <Image
              key={index}
              src={val}
              alt="slide"
              width={props.width}
              height={props.height}
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselCustom;
