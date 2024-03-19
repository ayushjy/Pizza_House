import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Loader from '@/components/loader'
const buttonvariants ={
  hover:{
    scale:1.1,
    boxShadow:"0px 0px 8px #f7b21e",
    transition:{
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.3
    }   
  }
}

const Home = () => {
const router = useRouter();
const gotobase = ()=>{
  router.push("/base")
}

  return (
    <div>   
      <Header/>     
      <div className='background flip-right-to-left w-full h-[537px] flex flex-col justify-center items-center gap-y-8'>
          <motion.div
          initial={{opacity:0.5}}
          animate={{ opacity:1,scale:1.5}}
          transition={{delay:0 ,duration:1}} className='head1 text-3xl text-[#820300]'>Welcome to Pizza House</motion.div>
          <motion.button
          variants={buttonvariants}
          whileHover="hover" className='head2  mb-52 text-xl text-[#820300] border-4 border-[#f7b21e] rounded-full px-10 py-2' onClick={gotobase}>Create Your Pizza</motion.button>
      </div>
    </div>
  )
}

export default Home
