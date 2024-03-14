import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Appcontext from '@/components/Appcontext'
const basearray = ["Classic", "Thin & Crispy", "Thick Crust"]

const containervariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      delay:0.5
    }
  }
}
const nextvariant={
  hidden:{
    x:'-100vw'
  },
  visible:{
    x:0,
    transition:{
      type:'spring',
      stiffness:120}
  }
}


const base = () => {
  const router = useRouter();
  const context = useContext(Appcontext);

  const gototopping = () => {
    router.push("/topping");
  }

  const addbase = (event) => {
    const selectedBase = event.target.textContent;
    console.log(selectedBase);
    context.setPizza({ ...context.pizza, base: selectedBase });

    // console.log("Selected Base:", base);
    //     context.setPizza({...context.pizza,base})
  }

  return (
    <div>
      <Header />
      <div className='background w-full h-[537px] flex justify-center items-center'>
        <motion.div  variants={containervariants}
                    initial="hidden"
                    animate="visible"
                     className='w-80 h-[50%] ml-20 mb-20 flex flex-col justify-center items-start'>
          <div className='h-[60%] '>
            <div className='w-80 head1  text-3xl text-[#820300] border border-b-[#f7b21e] pb-1'>Choose Your Base</div>
            <div  className='list-none space-y-2 head2 text-xl text-[#ad1d1a] pt-2 cursor-pointer'>
              {
                basearray.map(item => {
                  let spanclass = context.pizza.base == item ? 'active' : "";
                  return (
                    <motion.div  whileHover={{scale:1.2,originX:0,color:'#d23718'}} 
                                transition={{ type: 'spring', stiffness: 400 }}>
                    <li className={`flex ${spanclass}`} key={item} onClick={addbase}><span className='icon'><FiChevronRight size={20} /></span>{item}</li></motion.div>
                  )
                })
              }
            </div>
          </div>

          <div className='h-[25%] pb-40'>
            {
              context.pizza.base && (
                <motion.button 
                variants={nextvariant}
                //  initial="hidden" 
                // animate="visible" 
                whileHover={{scale:1.1,boxShadow:"0px 0px 8px #f7b21e",
                transition:{
                  repeat:Infinity,
                  repeatType: "reverse",
                  duration: 0.3
                }
                }} onClick={gototopping} className='head2 mt-4  text-lg text-[#820300] border-4 border-[#f7b21e] rounded-full px-8 py-1'>Next</motion.button>
              )
            }
          </div>
    </motion.div>
        </div>
    </div>
  )
}

export default base
