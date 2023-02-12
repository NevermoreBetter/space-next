import Destination from "../components/Destination";

export default async function DestinationPage() {
  const { destinations } = await import("../../data.json");
  console.log(destinations);
  return <Destination destinations={destinations} />;
}
