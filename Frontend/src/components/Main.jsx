import { Typewriter } from 'react-simple-typewriter';

const Main = () => {
  return (
    <div className="w-full flex justify-center items-center h-[80vh] text-white font-poppins">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center">
        <Typewriter
          words={['LEARN SMART', 'GROW FAST', 'ACHIEVE MORE']}
          loop={0}           
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h1>
    </div>
  );
};

export default Main;
