import Image from "next/image";
const WorkPics = (props: any) => {
  return (
    <>
      <div className="mt-5 mb-5 text-center">
        <div className="row">
          {props.All.map((val: any, index: string) => {
            return (
              <div className="col-md-3">
                <Image
                  key={index}
                  src={val.src}
                  alt="slide"
                  width="177px"
                  height="200px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkPics;
