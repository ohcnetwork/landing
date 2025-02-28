import Image from "next/image";
import { Heading, Text } from "./Text";

export function FeatureTile(
  props: {
    toLeft?: boolean;

    title: React.ReactNode;
    content: React.ReactNode;
  } & ({ image: string } | { video: string })
) {
  const { toLeft = false, title, content } = props;

  return (
    <div
      className={`flex ${
        toLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-10 flex-col`}
    >
      {"video" in props ? (
        <video
          src={props.video}
          autoPlay
          loop
          muted
          playsInline
          className="shadow-xl rounded-2xl w-full lg:max-w-[600px]"
          width={600}
          height={415}
        />
      ) : (
        <Image
          alt="Image"
          src={props.image}
          className="shadow-xl rounded-2xl w-full lg:max-w-[600px]"
          width={600}
          height={415}
        />
      )}
      <div className="w-full lg:w-[400px]">
        <Heading size={1}>{title}</Heading>
        <Text className="mt-4">{content}</Text>
      </div>
    </div>
  );
}
