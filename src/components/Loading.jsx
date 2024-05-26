import { motion } from 'framer-motion'

function Loading({ children }) {
  return (
    <motion.div
      className="bg-sambayon w-[100px] h-[100px] place-content-center"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <img className="mx-auto w-[50px] h-[50px]" src={children} alt="" />
    </motion.div>
  )
}

export default Loading
