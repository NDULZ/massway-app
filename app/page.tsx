import Campaigns from "@/components/Dashboard/campaigns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MasSway",
  description: "Connecting Brands + Ambassadors",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Campaigns />
    </>
  );
}
