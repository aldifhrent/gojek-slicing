import { featureData } from "@/lib/const";
import FeatureCard from "./feature-card";
import Scale from "./scale";

export default function Feature() {
  return (
    <section>
      <div className="pt-[80px] px-[20px]">
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-white text-5xl font-extrabold text-center md:text-left">
            Kenalin, Gojek. Si pembawa perubahan
          </h1>
          <button className="btn-green mt-10">Gabung</button>
        </div>
        {/* Feature  */}
        <div className="w-full bg-white rounded-tr-[64px] rounded-tl-[64px] mt-36 min-h-screen p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 mx-auto gap-32 -mt-20">
            {featureData.map((feature) => (
              <FeatureCard
                key={feature.id}
                image={feature.image}
                description={feature.description}
                title={feature.title}
              />
            ))}
          </div>
          <Scale />
        </div>
      </div>
    </section>
  );
}
