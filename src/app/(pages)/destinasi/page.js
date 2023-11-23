import SliderDestinasi from "@/app/components/custom/SliderDestinasi";
import Nav from "@/app/components/nav/page";
import GenrePage from "./genre/page";
import ContactPage from "@/app/components/contact/page";
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
      <GenrePage />
      <ContactPage />
    </>
  );
}
