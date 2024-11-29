import Image from "next/image";
interface featureCard {
  image: string;
  title: string;
  description: string;
}
export default function FeatureCard({
  image,
  title,
  description,
}: featureCard) {
  return (
    <div className="w-[306px] min-h-[346px] flex flex-col items-center justify-center  gap-y-4 text-center mx-auto ">
      <Image
        src={image}
        alt={title}
        width={140}
        height={186}
        className="-mt-[40px]"
      />
      <div className="flex flex-col items-center gap-y-10">
        <h2 className="text-[24px] font-bold">{title}</h2>
        <p className="text-center text-lg">{description}</p>
      </div>
    </div>
  );
}
