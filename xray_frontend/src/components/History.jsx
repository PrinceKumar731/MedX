import React, { useState, useEffect } from 'react';
import { getHistory, clearHistory } from '../utils/history';

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Load history from localStorage when the component mounts
        setHistory(getHistory());
    }, []);

    const handleClearHistory = () => {
        clearHistory();
        setHistory([]); // Update the state to reflect the change immediately
    };

    return (
        <section id="history" className="history-section">
            <h2>Patient Analysis History</h2>
            
            {history.length > 0 ? (
                <>
                    <div className="history-controls">
                        <button onClick={handleClearHistory} className="cta-button clear-btn">
                            Clear All History
                        </button>
                    </div>
                    <div className="history-timeline">
                        <div className="timeline-content">
                            {history.map((item) => (
                                <div className="history-card" key={item.id}>
                                    <img src={item.thumbnail} alt={`X-Ray from ${item.date}`} />
                                    <div className="history-info">
                                        <h4>Analysis Date:</h4>
                                        <p>{item.date}</p>
                                        <h4>Top Findings:</h4>
                                        <ul>
                                            {item.topFindings.length > 0 ? (
                                                item.topFindings.map((finding, index) => (
                                                    <li key={index}>{finding.name} ({finding.confidence}%)</li>
                                                ))
                                            ) : (
                                                <li>No significant findings</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="no-history-card">
                    <p>No analysis history found.</p>
                    <span>Upload an image in the Analyzer section to begin.</span>
                </div>
            )}
        </section>
    );
};

export default History;