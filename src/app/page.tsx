import Image from "next/image";
import { Body } from "./_components/Body";
import { Header } from "./_components/header";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Body category="Upcoming"  endpoint="upcomig"/>
      <Body category="Popular" endpoint ="popular"/>
      <Body category="Top rated" endpoint="top_rated"/>
    </div>
  );
}
