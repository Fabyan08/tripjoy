import SliderEvent from "../custom/Slider";

export default function PopularPage() {
  return (
    <section id="Popular" className="bg-[#090715] p-10 text-white px-10">
      <div className="md:pt-10 space-y-4 md:space-y-0 md:flex justify-between">
        <div>
          <h1 className="text-blue-400 text-2xl">Popular Trip</h1>
          <h1 className="mt-2 text-lg w-80">
            The Most Popular vacation For Your Best Trip
          </h1>
        </div>
        <div>
          <input
            type="text"
            className="p-2 border-none w-full bg-none rounded-full bg-bl2"
            placeholder="Search Your Trip"
          />
        </div>
      </div>
      <SliderEvent />
    </section>
  );
}
