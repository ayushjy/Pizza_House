import React from 'react'
const loadervariant={
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.25
            },
            y:{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.25
            }
        }
    }
}
const Loader = () => {
  return (
    <div className="mt-20 rounded-full text-white w-10 h-10">
      variants={loadervariant}
      animate="animationOne"
    </div>
  )
}

export default Loader
