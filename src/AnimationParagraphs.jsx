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
        transition={{ delay: 1, duration: 1 }}
      >
        Every day with you feels like a dream come true.
        <div className="flex justify-center flex-wrap">
          <span>
            I love you more than words could ever express. You are the light of
            my life, and I cherish every moment with you. I know we disagree on
            alot of things and are almost polar opposite of each other but we
            got through everything together and i think that made our bond so
            strong. Thankyou for not giving up on me and changing yourself for
            me and putting in all that effort for us, if it wasnt for you we
            would not be together right now and I would have regreted that till
            the very end. I am the luckiest person in the world to get such a
            gorgeous girl so easily. I hope the coming year brings you all the
            hapiness you can ask for and we be together through thick and thin
            and I hope the love u have for me never ends even if we are 90 years
            old you will still cherish me like u do now. Aur bs shadi kr lo ab
            jaldi se mujhsy.
          </span>
          <img src={heart} width={32} />
        </div>
      </motion.p>
    </div>
  );
};

export default AnimationParagraphs;
