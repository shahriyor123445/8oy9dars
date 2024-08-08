import Image from "next/image";
import LineChart from "./components/LineChart";
import Countries from "./components/fetchCountries";
import FechDates from "./components/fetchDates";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div>
        <Countries />
      </div>
      <div>
        <LineChart />
      </div>
      <div>
        <FechDates />
      </div>
    </div>
  );
}
