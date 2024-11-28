import FeatureCard from "./feature-card";
import { featureData } from "./lib/const";

export default function Feature() {
  return (
    <section className="">
      <div className="pt-[80px] px-[20px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">
            Kenalin, Gojek. Si pembawa perubahan
          </h1>
          <button className="bg-green-500 p-3 w-[100px] rounded-full text-white font-bold text-md mt-8">
            Gabung
          </button>
        </div>
        {/* Feature  */}
        <div className="w-full bg-white rounded-xl mt-10 p-10">
          <div className="flex">
            {featureData.map((feature) => (
              <FeatureCard
                key={feature.id}
                image={feature?.image}
                description={feature.description}
                title={feature.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
