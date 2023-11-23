import SliderDestinasi from "@/app/components/custom/SliderDestinasi";
import Nav from "@/app/components/nav/page";
export default function DestinasiPage() {
  return (
    <>
      <div className="bg-bl w-full h-screen">
        <Nav />
        <div>
          <h1>Destinasi</h1>
        </div>
        <div className="pt-20">
          <SliderDestinasi />
        </div>
      </div>
    </>
  );
}
