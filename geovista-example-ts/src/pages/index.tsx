import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Map />
    </div>
  );
}
