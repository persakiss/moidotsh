import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {

	const transition = { duration: 0.5, ease: 'easeInOut' }

	return (
		<motion.div
			ref={ref}
			initial={{y: '00%'}}
			animate={{y: '0%'}}
			exit={{y: '100%'}}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	)
}

export default forwardRef(PageTransition)
