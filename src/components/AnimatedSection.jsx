import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade+slide-up animation.
 * @param {string}  className  — forwarded to the wrapper div
 * @param {number}  delay      — seconds to wait before animating (for staggering)
 * @param {number}  y          — starting y-offset in px (default 30)
 */
export default function AnimatedSection({ children, className = '', delay = 0, y = 30 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
