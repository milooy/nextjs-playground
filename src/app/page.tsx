import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import RevalidateButton from "./components/RevalidateButton";
import { getTime } from "@/utils/getTime";

export default async function Home() {
  const time = await getTime("Asia/Seoul");
  return (
    <>
      <h1>main</h1>
      <div>현재시각: {time.datetime}</div>
      <ul className={style.list}>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"} />
    </>
  );
}
