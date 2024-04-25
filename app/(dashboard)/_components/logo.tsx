import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Image
        src="https://res.cloudinary.com/dtujpq8po/image/upload/v1712524129/pllqwcarklr4cy8tbhtp.png"
        alt="dealo academy image"
        height={90}
        width={90}
      />
    </div>
  );
};

export default Logo;
