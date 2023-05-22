import { useState } from "react";

import { Plus } from "@styled-icons/fa-solid/Plus";
import { Minus } from "@styled-icons/fa-solid/Minus";

import Heading from "@Heading/Heading";

interface GuestProps {
  intialCount: number;
  label: string;
}

export const Guest = ({ intialCount, label }: GuestProps) => {
  const [count, setCount] = useState(intialCount);

  return (
    <div className="text-center flex flex-col gap-2 w-full">
      <Heading variant="input-label">{label}</Heading>
      <div className="text-white flex items-center justify-center gap-4">
        <Minus
          width={24}
          height={24}
          onClick={() =>
            setCount((previousCount) =>
              previousCount > 0 ? previousCount - 1 : previousCount
            )
          }
        />
        <p className="text-[#c3c3c3] text-2xl">{count}</p>
        <Plus
          width={24}
          height={24}
          onClick={() => setCount((previousCount) => previousCount + 1)}
        />
      </div>
    </div>
  );
};
