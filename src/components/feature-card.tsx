import Image, { StaticImageData } from "next/image";

interface featureCard {
    image: StaticImageData | string,
    title: string,
    description: string,
}
export default function FeatureCard({ image, title, description}: featureCard) {
    return (
        <div>
            <Image src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}