import {useState, useEffect} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);

    const countUp =  () => {
        setCount(prevState => prevState+1)
    }

    const countDown =  () => {
        setCount(prevState => prevState-1)
    }

    useEffect(() => {
        console.log('<always> current count is ...', count);
    });

    /*
    useEffect(() => {
        console.log('<on mount> current count is ...', count);
    },[count]);
    */

    /*
    useEffect(() => {
        console.log('<depend on count> current count is ...', count);
    },[count]);
    */

    return (
        <div>
            <p>現在のカウント： {count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};
 
export default Counter;
