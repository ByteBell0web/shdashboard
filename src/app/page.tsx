import TotalCard from "@/components/totalcard";
import { BlackChart } from "@/components/blackchart";
import RecentCard from "@/components/recentcard/recentcard";

export default function Home() {
  return (
    <main className="p-5">
      <div className="dashboard-title p-4">Dashboard</div>
      <div className="items-center flex-col">
        <div className="grid grid-flow-col mb-4 gap-x-2">
          <TotalCard title ="Total Currency" amount="$45,231.89" description="+20.1% from last month"/>
          <TotalCard title ="Ether Currency" amount="$2,350" description="+180.1% from last month"/>
          <TotalCard title ="Solana Currency" amount="$12,234" description="+19% from last month"/>
          <TotalCard title ="Etc Currency" amount="$573.89" description="+20.1% from last month"/>
        </div>
        <div className="grid grid-flow-col">
          <BlackChart />
          <RecentCard />
        </div>
      </div>
      
    </main>
  );
}
