import Crew from "../components/Crew";
export default async function CrewPage() {
  const { crew } = await import("../../data.json");
  console.log(crew);
  return <Crew crew={crew} />;
}
