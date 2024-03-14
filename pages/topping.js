import React from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Appcontext from '@/components/Appcontext'

const toppingitems = ["Mushrooms", "Peepers", "Onions", "Olive", "Extra Cheese", "Tomatoes"]
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

const Topping = () => {
  const router = useRouter();
  const context = useContext(Appcontext);
  console.log(context.pizza);


  const gotoorder = () => {
    router.push("/order");
  }

  const addtoppings = (topping) => {
    let newtoppings;
    if (!context.pizza.toppings.includes(topping)) {
      newtoppings = [...context.pizza.toppings, topping];
    }
    else {
      newtoppings = context.pizza.toppings.filter(item => item !== topping);
    }
    context.setPizza({ ...context.pizza, toppings: newtoppings });
  }

  return (
    <div>
      <Header />
      <div className='background w-full h-[537px] flex justify-center items-center'>
        <motion.div 
        variants={containervariants}
        initial="hidden"
          animate="visible"
          className='w-80 ml-20 flex flex-col justify-center items-start'>
          <div className='w-96 head1  text-3xl text-[#820300] border border-b-[#f7b21e] pb-1'>Choose Your Toppings</div>
          <div className='list-none space-y-2 head2 text-xl text-[#ad1d1a] pt-2 cursor-pointer'>
            {
              toppingitems.map(items => {
                let spanClass = context.pizza.toppings.includes(items) ? 'active' : '';
                return ( <motion.div whileHover={{scale:1.3,originX:0,color:'#d23718'}} 
                                      transition={{ type: 'spring', stiffness: 400 }} >
                  <li key={items} onClick={() => addtoppings(items)} className={`flex ${spanClass}`}>  <span className='icon'><FiChevronRight size={20} /></span>{items}</li>
                  </motion.div>
                )
              })
            }
          </div>

          {/* {
            context.pizza.toppings.length > 0 && (
            )} */}
          <motion.button 
          variants={buttonvariants}
          whileHover="hover" onClick={gotoorder} className='head2 mt-6 mb-40 text-lg text-[#820300] border-4 border-[#f7b21e] rounded-full px-8 py-1'>Next</motion.button>

        </motion.div>
      </div>
    </div>
  )
}

export default Topping
