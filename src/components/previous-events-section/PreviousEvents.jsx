import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.jpg";
import IMG5 from "../../assets/5.png";

const PreviousEvents = () => {
  return (
    <section className=" mx-52 flex flex-col gap-24">
      <div className="flex flex-row gap-16 place-items-center ">
        <p className="h-1 flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></p>
        <h2 className="text-6xl font-bold text-white">Previous Events</h2>
      </div>
      <div className="flex flex-row justify-evenly w-full h-96">
        <img src={IMG1} className="w-72 rounded-lg" />
        <div className="flex  flex-col place-content-end gap-4">
          <img src={IMG2} className="w-96 h-48 rounded-lg" />
          <img src={IMG3} className="w-96 h-48 rounded-lg" />
        </div>
        <img src={IMG4} className=" w-64 h-64 place-self-end rounded-lg" />
        <img src={IMG5} className="w-72 rounded-lg" />
      </div>
      <div className="flex flex-col h-full w-full bg-black rounded-lg bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className=" h-36 flex flex-row justify-evenly place-items-center ">
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              4.5K+
            </span>
            <span className="text-white font-medium text-3xl">Hackers</span>
          </p>
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              55+
            </span>
            <span className="text-white font-medium text-3xl">Countries</span>
          </p>
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              48+
            </span>
            <span className="text-white font-medium text-3xl">Hack Hours</span>
          </p>
          <p className="flex flex-row place-items-center gap-4">
            <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
              460+
            </span>
            <span className="text-white font-medium text-3xl">Projects</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
