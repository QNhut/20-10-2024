import sorrryAnimation from "../assets/sorry.json";
import { useLottie } from "lottie-react";

const APOLOGIZE_SENTENCES = [
  "♥️ Hôm nay anh không có thời gian để qua bé để bé một mình.",
  "♥️ Mọi thứ sẽ ổn và khi anh có thời gian rãnh thì anh sẽ qua em và nói cho em nghe những điều mà anh muốn nói.",
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
