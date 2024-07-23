import TotalCard from "@/components/totalcard";
import { BlackChart } from "@/components/blackchart";
import RecentCard from "@/components/recentcard/recentcard";

export default function Home() {
  return (
    <main className="p-5">
      <div className="dashboard-title p-4">Trade Dashboard</div>
      <div className="items-center flex-col">
        <div className="grid grid-flow-col mb-4 gap-x-2">
          <TotalCard title ="Total Currency" />
          <TotalCard title ="Bitcoin"/>
          <TotalCard title ="Ethereum"/>
          <TotalCard title ="BNB"/>
          <TotalCard title ="Etc Currency"/>
        </div>
        <div className="grid grid-flow-col">
          <BlackChart />
          <RecentCard />
        </div>
      </div>
      
    </main>
  );
}
