import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center bg-gray-100 h-96 pt-20">
      <ThreeCircles
        height="60"
        width="50"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;