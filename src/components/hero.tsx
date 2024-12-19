import { Decoration } from "./decoration";
import { Heading } from "./heading";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="flex h-[80vh]">
      {/* Text */}
      <div className="flex flex-col items-start justify-center gap-8">
        <Heading className="text-8xl">
          keep your <br />
          <Decoration> pet happy</Decoration>
        </Heading>

        <Button>Shop now</Button>
      </div>
      {/* Image */}
      <div></div>
    </div>
  );
}
