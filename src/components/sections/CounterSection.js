import React from 'react';
import StatsBlock from '@/components/blocks/StatsBlock';
import '@/components/sections/CounterSection.css';

const mockData = [
    {
        value: "2000 +",
        title: "ZREALIZOWANYCH PROJEKTÓW",
        description: "Jesteśmy zespołem profesjonalistów, którzy zajmują się kompleksową usługą klimatyzacji."
    },
    {
        value: "70 +",
        title: "NAGRÓD I WYRÓŻNIEŃ",
        description: "Podejmujemy się budowy monitoringu od zera."
    },
    {
        value: "5 000 000 +",
        title: "ROBOCZOGODZIN",
        description: "Posiadamy szeroki asortyment systemów alarmowych dostosowanych do potrzeb Klienta."
    }
];

const CounterSection = () => {
    return (
        <section className="counter-section">
            <div className="container">
                <StatsBlock stats={mockData} />
            </div>
        </section>
    );
};

export default CounterSection;