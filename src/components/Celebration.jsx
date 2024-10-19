import danceAnimation from "../assets/dance.json";
import { useLottie } from "lottie-react";

const CELEBRATION_SENTENCES = [
  "💯 Gọi em là 20/10 vì em luôn tuyệt vời gấp đôi thang điểm 10!",
  "💚 Chúc em luôn xinh đẹp, luôn mạnh mẽ, luôn ngoan hiền và luôn tươi vui.",
  "💚 Chúc em luôn hạnh phúc hôm nay, ngày mai và những ngày sau nữa.",
];

const Celebration = () => {
  const { View } = useLottie({
    animationData: danceAnimation,
    loop: true,
    autoplay: true,
    className: "h-[300px]",
  });

  return (
    <div className="px-8 content-center align-middle gap-3">
      <div className="-">
      <h1 className="text-4xl bg-text-gradient text-transparent bg-clip-text font-bold text-center text-shadow-custom">
        CHÚC MỪNG EM
      </h1>
      <h2 className="text-3xl bg-text-gradient text-transparent bg-clip-text font-bold text-center text-shadow-custom">
        NGÀY LỄ 20/10
      </h2>
      </div>
      {View}
      <span className="my-2" />
      <div className="flex-col gap-3 mt-3">
        {CELEBRATION_SENTENCES.map((sentiment, index) => (
          <p
            key={index}
            className="text-lg mb-2 text-slate-600 font-medium text-shadow-custom"
          >
            {sentiment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
