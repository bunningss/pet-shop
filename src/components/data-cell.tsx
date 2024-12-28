import dynamicIconImports from "lucide-react/dynamicIconImports";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface DataCellProps {
  dataName: string;
  dataValue: string;
  href?: string;
  icon?: keyof typeof dynamicIconImports;
  className?: string;
}

export function DataCell({
  dataName,
  dataValue,
  href = "",
  icon,
  className,
}: DataCellProps) {
  return (
    <div className="h-fit flex items-center gap-2 text-base">
      {icon && <Icon name={icon} size={28} />}
      <div>
        <span className="block capitalize opacity-70">{dataName}</span>
        {!href && (
          <span className={cn("block capitalize", className)}>{dataValue}</span>
        )}
        {href && (
          <a href={href} className="block normal-case">
            {dataValue}
          </a>
        )}
      </div>
    </div>
  );
}
