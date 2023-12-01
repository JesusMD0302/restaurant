import React from "react";

interface TitleProps {
  isFirstTitle?: boolean;
  title: string;
  subtitle?: string;
  titleSize?: number;
  subtitleSize?: number;
}

export default function Title({
  isFirstTitle = false,
  title,
  subtitle,
  titleSize,
  subtitleSize,
}: TitleProps) {
  const titleStyle = {
    fontSize: !titleSize ? "28px" : `${titleSize}px`,
    lineHeight: !titleSize ? "36px" : `${titleSize + 8}px`,
  };
  const subtitleStyle = {
    fontSize: !subtitleSize ? "16px" : `${subtitleSize}px`,
    lineHeight: !subtitleSize ? "36px" : `${subtitleSize + 8}px`,
  };

  if (isFirstTitle) {
    return (
      <section>
        <h1 style={titleStyle} className="font-semibold">
          {title}
        </h1>
        <p style={subtitleStyle} className="font-normal text-[#ABBBC2]">
          {subtitle}
        </p>
      </section>
    );
  }

  return (
    <section>
      <p style={titleStyle} className="font-semibold">
        {title}
      </p>
      <p style={subtitleStyle} className="font-normal text-[#ABBBC2]">
        {subtitle}
      </p>
    </section>
  );
}
