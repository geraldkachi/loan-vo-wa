import { Card } from "arvara";
import { AIdocumenttextbol, AImoneysbol } from "arvara-icons";
import { BarChart } from "../../components/chart/BarChart";
import { LineChart } from "../../components/chart/LineCharts";
import { RadialBarChart } from "../../components/chart/RadiaBarChart";
import {
  barChartData,
  barChartData2,
  geometryData,
  radialBarChartData,
} from "../../server/data";

const LoadPortfolio = () => {
  return (
    <>
      <div>Data for 01/01/2021 - 01/01/2022 displayed</div>
      <div className="flex flex-row">
        <div className="p-2">
          <Card type="card">
            <div className="flex flex-row">
              <div className="w-12 h-12 rounded-full border border-blue-4 bg-blue">
                <AImoneysbol className="icon solid text-white m-auto my-2" />
              </div>
              <div className="ml-72 mt-3">Breakdown</div>
            </div>
            <p className="text-base mt-8">Loan Disbursed</p>
            <h1 className="text-2xl mt-4">₦ 104,460,978</h1>
          </Card>
        </div>
        <div className="p-2">
          <Card type="card">
            <div className="flex flex-row">
              <div className="w-12 h-12 rounded-full border border-blue-4 bg-blue">
                <AImoneysbol className="icon solid text-white m-auto my-2" />
              </div>
              <div className="ml-72 mt-3">Breakdown</div>
            </div>
            <p className="text-base mt-8">Project Revenue</p>
            <h1 className="text-2xl mt-4">₦ 27,655,305</h1>
          </Card>
        </div>
        <div className="p-2">
          <Card type="card">
            <div className="flex flex-row">
              <div className="w-12 h-12 rounded-full border border-blue-4 bg-blue">
                <AIdocumenttextbol className="icon solid text-white m-auto my-2" />
              </div>
              <div className="ml-72 mt-3">Breakdown</div>
            </div>
            <p className="text-base mt-8">Total Loan Application</p>
            <h1 className="text-2xl mt-4">60,486</h1>
          </Card>
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <div className="w-2/3">
          <LineChart geometry={geometryData} />
        </div>
        <div className="w-80 ml-5">
          {/*<Card type="card">*/}
          <RadialBarChart
            data={radialBarChartData}
            color={["#F46036", "#2E63EA", "#02C39A"]}
          />
          {/*</Card>*/}
        </div>
      </div>
      <div className="flex flex-row mt-8">
        <BarChart data={barChartData} color={["#02C39A", "#F46036"]} />
        <BarChart data={barChartData2} color={["#2E63EA", "#02C39A"]} />
      </div>
    </>
  );
};

export default LoadPortfolio;
