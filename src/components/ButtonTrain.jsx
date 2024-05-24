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
        className="bg-sambayon w-[100%] rounded-md   h-[100px] text-custombg font-extrabold text-xl place-content-center text-center hover:border-white hover:border hover:text-white transition-all ease-in-out duration-200 cursor-pointer active:scale-95 "
      >
        {children}
      </button>
    </motion.div>
  )
}

export default ButtonTrain
