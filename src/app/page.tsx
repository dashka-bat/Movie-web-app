import Image from "next/image";
import { Body } from "./_components/Body";
import { Header } from "./_components/header";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Body />
    </div>
  );
}
