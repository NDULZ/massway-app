import Analytics from "@/components/Dashboard/analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | MasSway",
  description: "This is the Analytics page for MasSway",
  // other metadata
};

const AnalyticsPage = () => {
  return (
    <>
      <Analytics />
    </>
  );
}

export default AnalyticsPage;
