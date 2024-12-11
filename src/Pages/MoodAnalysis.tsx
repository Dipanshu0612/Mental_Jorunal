import BarChart from "../components/BarChart";
import Header from "../components/header";
import Footer from "../components/footer";
import { PieChart } from "@mui/x-charts";

export default function MoodAnalysis() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-evenly p-6 flex-col space-y-8 -z-10 overflow-hidden">
        <div className="mood_1 p-10 w-full flex items-center justify-around">
          <BarChart />
          <h3 className="text-4xl w-1/2 text-center">Categroy Analysis</h3>
        </div>

        <div className="mood_2 p-6 w-full flex items-center justify-around">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "😁" },
                  { id: 1, value: 2, label: "🥲" },
                  { id: 2, value: 2, label: "😣" },
                  { id: 3, value: 1, label: "😪" },
                  { id: 4, value: 8, label: "😴" },
                  { id: 5, value: 10, label: "😓" },
                  { id: 5, value: 15, label: "😭" },
                  { id: 5, value: 5, label: "😵‍💫" },
                ],
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            height={300}
            width={800}
          />
          <h3 className="text-4xl w-1/2 text-center">Mood Analysis</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
