import { motion } from 'framer-motion'

function Loading({ children }) {
  return (
    <motion.div
      className=" w-[100px] h-[100px] bg-sambayon flex justify-center items-center"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ['10%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <img src={children} alt="" className="w-[50%] h-[50%]" />
    </motion.div>
  )
}

export default Loading
