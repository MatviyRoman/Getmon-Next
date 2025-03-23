import React from 'react';
import "./StatsBlock.css";

const StatsBlock = ({ stats }) => {
    return (
        <>
            {stats.map((stat, index) => (
                <div className="stats-block" key={index}>
                    <div className="stat-item">
                        <div className="stat-line"></div>
                        <div className="stat-icon"></div>
                        <p className="stat-item-value">{stat.value}</p>
                        <h2 className="stat-item-title">{stat.title}</h2>
                        <img className="stat-logo" src="/img/stat-logo.svg" alt={stat.title} />
                    </div>
                    <div className="stat-description">
                        <p>{stat.description}</p>
                        <img className="stat-line" src="/img/line-mobile.svg" alt="line" />
                    </div>
                </div>
            ))}
        </>
    );
};

export default StatsBlock;