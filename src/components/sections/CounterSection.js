// import React from 'react';
// import StatsBlock from '@/components/blocks/StatsBlock';
// import '@/components/sections/CounterSection.css';

// const mockData = [
//     {
//         value: "2000 +",
//         title: "ZREALIZOWANYCH PROJEKTÓW",
//         description: "Jesteśmy zespołem profesjonalistów, którzy zajmują się kompleksową usługą klimatyzacji."
//     },
//     {
//         value: "70 +",
//         title: "NAGRÓD I WYRÓŻNIEŃ",
//         description: "Podejmujemy się budowy monitoringu od zera."
//     },
//     {
//         value: "5 000 000 +",
//         title: "ROBOCZOGODZIN",
//         description: "Posiadamy szeroki asortyment systemów alarmowych dostosowanych do potrzeb Klienta."
//     }
// ];

// const CounterSection = () => {
//     return (
//         <section className="counter-section">
//             <div className="container">
//                 <StatsBlock stats={mockData} />
//             </div>
//         </section>
//     );
// };

// export default CounterSection;

"use client";

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// import { motion } from 'framer-motion';
import StatsBlock from '@/components/blocks/StatsBlock';
import '@/components/sections/CounterSection.css';

const mockData = [
    {
        value: 2000, // Змінити на число (не рядок)
        title: "ZREALIZOWANYCH PROJEKTÓW",
        description: "Jesteśmy zespołem profesjonalistów, którzy zajmują się kompleksową usługą klimatyzacji."
    },
    {
        value: 70,
        title: "NAGRÓD I WYRÓŻNIEŃ",
        description: "Podejmujemy się budowy monitoringu od zera."
    },
    {
        value: 5000000,
        title: "ROBOCZOGODZIN",
        description: "Posiadamy szeroki asortyment systemów alarmowych dostosowanych do potrzeb Klienta."
    }
];

const AnimatedCounter = ({ value, suffix = " +" }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    useEffect(() => {
        if (inView) {
            const duration = 2000; // Тривалість анімації в мс
            const start = 0;
            const end = value;
            const increment = end / (duration / 16); // ~60fps

            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if (current >= end) {
                    clearInterval(timer);
                    current = end;
                }
                setCount(Math.floor(current));
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <span className="stat-item-value" ref={ref}>
            {/* {count.toLocaleString()}{suffix} */}
            {/* {count}{suffix} */}
            {formatNumber(count)}{suffix}
        </span>
    );
};

const CounterSection = () => {
    const animatedData = mockData.map(item => ({
        ...item,
        value: <AnimatedCounter value={item.value} />
    }));

    return (
        <section className="counter-section">
            <div className="container">
                <StatsBlock stats={animatedData} />
            </div>
        </section>
    );
};

export default CounterSection;