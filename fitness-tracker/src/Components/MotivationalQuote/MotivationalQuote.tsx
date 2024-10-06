import { useState, useEffect } from 'react';
import cl from './styles.module.css';

const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "The only bad workout is the one that didn’t happen.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Success starts with self-discipline.",
    "The body achieves what the mind believes.",
    "Your only limit is you. Make it happen.",
    "You don’t have to be great to start, but you have to start to be great.",
];

const MotivationalQuote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <div className={cl.quoteContainer}>
            <p className={cl.quoteText}>
                {quote}
            </p>
        </div>
    );
};

export default MotivationalQuote;