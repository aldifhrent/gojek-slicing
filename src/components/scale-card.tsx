/* eslint-disable @next/next/no-img-element */
interface scaleCardProps {
  image: string;
  backgroundColor: string;
  title: string;
  description: string;
}

export default function ScaleCard(props: scaleCardProps) {
  return (
    <div
      className={`min-w-[300.39px] min-h-[367.3px] rounded-[40px] leading-6`}
      style={{ backgroundColor: `#${props.backgroundColor}` }}
    >
      <div className={`p-10 flex flex-col  gap-20  justify-between mx-aut`}>
        <img
          src={props.image}
          width={300}
          height={207}
          alt={props.title}
          className="-mt-[120px] flex justify-center items-center mx-auto"
        />
        <div className="flex flex-col gap-y-4 ">
          <h1 className="font-extrabold text-4xl">{props.title}</h1>
          <p className="text-lg">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
