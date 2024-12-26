import { Body } from "../_components/Body";
type Props = {
  params: {
    id: string;

    category: string;
  };
};
export default function Home({ params }: Props) {
  return (
    <>
      <Body category={params.category} endpoint={params.category} />
    </>
  );
}
