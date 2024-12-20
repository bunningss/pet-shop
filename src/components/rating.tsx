import { Icon } from "./icon";

export function Rating() {
  return (
    <div className="flex items-center">
      <Icon name="star" className="text-primary" size={22} />
      <Icon name="star" className="text-primary" size={22} />
      <Icon name="star" className="text-primary" size={22} />
      <Icon name="star" className="text-primary" size={22} />
    </div>
  );
}
