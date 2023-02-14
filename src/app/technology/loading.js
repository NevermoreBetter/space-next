import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <div className="bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-no-repeat bg-loading bg-left-top h-[100vh] px-[24px] overflow-x-hidden z-1 relative  lg:overflow-y-hidden sm:pr-0">
      <Navbar />
    </div>
  );
}
