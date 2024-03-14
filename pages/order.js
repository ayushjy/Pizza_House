import React,{useState} from 'react'
import Header from '@/components/Header'
import {useContext} from 'react'
import { useRouter } from 'next/router';
import { motion,AnimatePresence } from 'framer-motion';
import Appcontext from '@/components/Appcontext';

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
      mass:0.4,
      damping:7,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  }
}
const childvariants ={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}

const order = () => {
  const[showtitle,setShowtitle] = useState(true);
  setTimeout(()=>{
    setShowtitle(false);
  },2000);
  const router = useRouter();
  const context = useContext(Appcontext);
  console.log(context.pizza);
  
  const cancelorder = ()=>{
    router.push("/");
    context.setPizza({base:"",toppings:[]});
    alert("your order has cancelled");
  }
  return (
    <div>
      <Header/>
      <div className='background w-full h-[537px] flex justify-center items-center'>
        <motion.div 
        variants={containervariants}
        initial="hidden"
        animate="visible"
        className=' ml-8 mb-20 flex flex-col justify-center items-center'>
          <AnimatePresence>
          {
            showtitle && (
              <motion.div 
              exit={{y:-1000}}
              className='head1  text-3xl text-[#820300] border border-b-[#f7b21e] pb-1'>Thank you for your order 🙂</motion.div>
              )
          }
          </AnimatePresence>
            <motion.div variants={childvariants}
                        className='head1 text-xl text-center text-[#ad1d1a] pt-4 pb-1'>You ordered a {context.pizza.base} pizza with:</motion.div>
            <motion.div variants={childvariants}
                         className='list-none space-y-1 head2 text-xl text-center text-[#ad1d1a] pt-2'>
            {context.pizza.toppings.map((topping)=>( 
                <div key={topping}>{topping}</div>
                ))}
            </motion.div>
            <motion.button variants={childvariants}

            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #f7b21e" }} 
            className='head2 mt-6 mb-24 text-lg text-[#820300] border-4 border-[#f7b21e] rounded-full px-8 py-1' onClick={cancelorder}>cancel order</motion.button>
      </motion.div>
      </div>
    </div>
  )
}

export default order
