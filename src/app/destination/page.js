import Destination from "../components/Destination";

export default async function DestinationPage() {
  const { destinations } = await import("../../data.json");
  return <Destination destinations={destinations} />;
}
