import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { ReactElement, PropsWithChildren, forwardRef, ReactNode } from "react";
import { workImg } from "../imagesData";
import ReactElasticCarousel from "react-elastic-carousel";
import { ReactElasticCarouselProps } from "react-elastic-carousel";
import { Props } from "react-responsive-carousel/lib/ts/components/Thumbs";
// import { CarouselMainProps } from "../PropsInterface";
const CustomCarousel = forwardRef<
  any,
  ReactElasticCarouselProps & { children: ReactNode[] }
>((props, ref) => <ReactElasticCarousel ref={ref} {...props} />);

const CarouselWork = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <CustomCarousel
        isRTL={true}
        itemsToShow={3}
        breakPoints={breakPoints}
        showArrows={false}
        enableAutoPlay={true}
      >
        {workImg.map((val, index) => {
          return (
            <>
              <div>
                <Image
                  key={index}
                  src={val.src}
                  alt="slide"
                  width="200px"
                  height="200px"
                />
              </div>
            </>
          );
        })}
      </CustomCarousel>
    </>
  );
};

export default CarouselWork;
