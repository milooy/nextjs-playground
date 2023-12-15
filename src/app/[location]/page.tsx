import HomeButton from "../components/HomeButton";
import { getCurrentWeather } from "@/utils/getCurrentWeather";

export function generateMetadata({ params }: { params: { location: string } }) {
  return {
    title: `${params.location}의 날씨`,
    description: "날씨 앱",
  };
}

export default async function Location({ params }: { params: { location: string } }) {
  const res = await getCurrentWeather(params.location);

  return (
    <>
      <h1>{params.location}의 예보</h1>
      {res.current.condition.text}
      <HomeButton />
    </>
  );
}
