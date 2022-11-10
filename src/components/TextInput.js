import {useState} from 'react'

const TextInput = () => {

    const [name, setName] = useState();

    const handleName = (e) => {
        setName(e.target.value)
        console.log(name);
    }

    return (
        <input
            onChange = { (e) => handleName(e) }
            type={'text'}
            value={name}
        />
    );

};
export default TextInput;
