import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
const Header = () => {
  return (
    
    <div className='flex  w-full h-[200px] ml-4 justify-start items-center'>
      <Link href="/"><Image src="/pizza.png?v=123" alt='pizza' width={100} height={150} /></Link>
      <motion.div initial={{y:-250}} animate={{y:0}}
      transition={{delay:0.2,type:'spring',stiffness:500}} className='heading text-[#820300]  w-full mr-24 border border-b-[#f7b21e] ml-2 pb-1 text-3xl'>Pizza House</motion.div>
    </div>
  
  )
}

export default Header
