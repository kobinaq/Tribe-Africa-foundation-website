'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CountUpStatsProps {
  stats: Array<{
    number: string;
    label: string;
  }>;
}

export default function CountUpStats({ stats }: CountUpStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  );
}

function StatCard({ stat, index }: { stat: { number: string; label: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  // Extract number and suffix (e.g., "50,000+" becomes 50000 and "+")
  const parseNumber = (str: string) => {
    const match = str.match(/^([\d,]+)(.*)$/);
    if (match) {
      const num = parseInt(match[1].replace(/,/g, ''));
      const suffix = match[2];
      return { num, suffix };
    }
    return { num: 0, suffix: str };
  };

  const { num: targetNumber, suffix } = parseNumber(stat.number);

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * targetNumber);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetNumber);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, targetNumber]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {isInView ? formatNumber(count) : '0'}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
}
