import { Timeline } from "~/components/ui/timeline";
import { timelineData } from "../data";

export function Projects() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#141414]">
      <div className="container">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
