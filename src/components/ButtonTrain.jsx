import { motion } from 'framer-motion'

function ButtonTrain({ children, value }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, scale: 0.7 }}
      animate={{ y: 0.5, scale: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <button
        value={value}
        className="rounded-2xl text-sm  font-semibold rubik-md   bg-sambayon text-[#161714]  p-[10px] place-content-center text-center hover:border-white hover:border border border-transparent hover:text-white transition-all   ease-in-out duration-100 cursor-pointer w-[150px] active:scale-95 "
      >
        {children}
      </button>
    </motion.div>
  )
}

export default ButtonTrain
