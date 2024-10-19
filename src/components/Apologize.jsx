import sorrryAnimation from "../assets/sorry.json";
import { useLottie } from "lottie-react";

const APOLOGIZE_SENTENCES = [
  "😢 Xin lỗi vì đã quạo với em, mốt hong vậy nữa đâu.",
  "😢 Em đừng có ăn hiệp anh nữa, la anh hoài lun.",
  "♥️ Thương em nhiều!",
];
const Apologize = () => {
  const { View } = useLottie({
    animationData: sorrryAnimation,
    loop: true,
    autoplay: true,
    className: "h-[300px]",
  });

  return (
    <div className="px-8 content-center align-middle gap-3">
      {View}
      <span className="my-2" />
      <div className="flex-col gap-3 mt-3">
        {APOLOGIZE_SENTENCES.map((sentiment, index) => (
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

export default Apologize;
