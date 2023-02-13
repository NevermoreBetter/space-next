import Technology from "../components/Technology";

export default async function TechnologyPage() {
  const { technology } = await import("../../data.json");

  return <Technology technology={technology} />;
}
