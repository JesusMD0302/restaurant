"use client"
import Card from "@/components/Card/Card";
import GridContainer from "@/components/GridContainer/GridContainer";
import IconContainer from "@/components/IconContainer/IconContainer";
import Status from "@/components/Status/Status";
import Title from "@/components/Title/Title";
import { CardHeader, CardBody } from "@nextui-org/react";
import { BsCoin, BsBookmarkDash } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";

export default function Summarys() {
  return (
    <GridContainer className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <Card>
        <CardHeader className="p-4 flex gap-3">
          <IconContainer color="#252836">
            <BsCoin color="#9288E0" size={24} />
          </IconContainer>
          <Status value={32.4} valueSymbol="positive" />
        </CardHeader>
        <CardBody className="p-4 flex flex-col items-start gap-2">
          <Title title="$10,243.00" subtitle="Total Revenue" />
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="p-4 flex gap-3">
          <IconContainer color="#252836">
            <BsBookmarkDash color="#FFB572" size={24} />
          </IconContainer>
          <Status value={12.4} valueSymbol="negative" />
        </CardHeader>
        <CardBody className="p-4 flex flex-col items-start gap-2">
          <Title title="23,456" subtitle="Total Dish Ordered" />
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="p-4 flex gap-3">
          <IconContainer color="#252836">
            <HiOutlineUsers color="#65B0F6" size={24} />
          </IconContainer>
          <Status value={2.4} valueSymbol="positive" />
        </CardHeader>
        <CardBody className="p-4 flex flex-col items-start gap-2">
          <Title title="1,243" subtitle="Total Customer" />
        </CardBody>
      </Card>
    </GridContainer>
  );
}
