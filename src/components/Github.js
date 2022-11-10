import {useState, useEffect} from 'react'


const Github = () => {

    const [name, setName] = useState('');
    const [id, setId] = useState('atsushi-matsui');
    const ids = ['google', 'facebook', 'aws'];
    const getRandomId  = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)];
        setId(_id);
    }

    useEffect( () => {
        fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setName(data.name);
        }).catch(error => {
            console.log(error);
        })
    }

    ,[id]);
    

    return (
        <div>
            <p>id:{id}, github name:{name} </p>
            <button onClick={getRandomId}>random</button>
        </div> 
    )
}

export default Github;
