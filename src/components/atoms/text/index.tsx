'use client';

import React, { FC } from 'react';
interface BaseTextProps {
  text: string;
}
interface TwoColorsTextProps {
  text2: string;
  color1?: string;
  color2?: string;
}

export const BaseText: FC<BaseTextProps> = ({ text }) => {
  return <p className="">{text}</p>;
};
export const HeadText: FC<BaseTextProps> = ({ text }) => {
  return <h1 className="">{text}</h1>;
};

export const MediumText: FC<BaseTextProps> = ({ text }) => {
  return <p className="">{text}</p>;
};

export const TwoColorsText: FC<BaseTextProps & TwoColorsTextProps> = ({
  text,
  text2,
  color1,
  color2,
}) => {
  return (
    <p className="">
      <span className={color1}>{text}</span>
      <span className={color2}>{text2}</span>
    </p>
  );
};
