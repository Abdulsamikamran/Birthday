import { motion } from "framer-motion";
import love from "./assets/love.gif";
import heart from "./assets/heart.gif";

const AnimationParagraphs = () => {
  return (
    <div className="  text-center text-lg text-black">
      <div className="flex gap-1 items-center justify-center">
        <>My</>
        <img src={love} width={40} />
      </div>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Every day with you feels like a dream come true.
        <div className="flex justify-center flex-wrap">
          <span>
            I love you more than words could ever express. You are the light of
            my life, and I cherish every moment with you.
          </span>
          <img src={heart} width={32} />
        </div>
      </motion.p>
    </div>
  );
};

export default AnimationParagraphs;
