import { scaleData } from "@/lib/const";
import ScaleCard from "./scale-card";

export default function Scale() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-5xl font-bold">Skala kami</h1>
        <button className="btn-green mt-4">Gabung</button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 md:gap-10 mt-40 ">
          {scaleData.map((scale) => (
            <ScaleCard
              key={scale.id}
              image={scale.image}
              backgroundColor={scale.backgroundColor}
              title={scale.title}
              description={scale.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
