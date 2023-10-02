import Image from "next/image";

export default function Order() {
  return (
    <div className="flex gap-[16px]">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative">
        <Image
          src={"/images/dish-image.png"}
          alt="order image"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-semibold">Spicy seasoned seafood noodles</p>
        <p className="text-xs font-normal">200 dishes ordered</p>
      </div>
    </div>
  );
}
