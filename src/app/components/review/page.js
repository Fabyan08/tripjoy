import { FaStar } from "react-icons/fa6";
export default function ReviewPage() {
  return (
    <div className="bg-gradient-to-b from-[#142536] to-bl w-full h-fit pb-10">
      <div className="md:pt-20">
        <h1 className="text-center text-2xl md:pt-20 text-blue-500">Review</h1>
        <h1 className="text-white text-center font-bold text-lg">
          What Our Client Say?
        </h1>
      </div>
      <div className="flex mt-5 relative justify-center text-white">
        <h1 className="w-[1000px] text-center relative z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          provident? Maxime ipsa, placeat esse inventore rerum similique,
          architecto, dolores consequatur minus culpa atque omnis sint dolorum
          ut? Aperiam debitis minima perspiciatis itaque dolores impedit
          perferendis. Illo aspernatur quis saepe nostrum architecto nam, modi
          facilis porro consequatur? Saepe nihil, odio suscipit accusamus qui
          itaque commodi quidem laboriosam error, modi nulla recusandae!
          <div className="absolute left-0 -top-5">
            <h1 className="text-[100px] opacity-30">&quot;</h1>
          </div>
          <div className="absolute right-0 -top-[1px]">
            <h1 className="text-[100px] opacity-30">&quot;</h1>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <FaStar className="text-center text-yellow-500" />
            <FaStar className="text-center text-yellow-500" />
            <FaStar className="text-center text-yellow-500" />
            <FaStar className="text-center text-yellow-500" />
            <FaStar className="text-center text-yellow-500" />
          </div>
          <h1 className="text-center mt-4 text-xl font-bols">Bu Diah</h1>
        </h1>
      </div>
    </div>
  );
}
