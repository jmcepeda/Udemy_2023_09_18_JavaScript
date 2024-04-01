import { ChangeEventHandler} from 'react'

interface InputProps {
    name: string,
    placeholder: string,
    handleChange: ChangeEventHandler<HTMLInputElement>
}
export default function Input({name, placeholder, handleChange}: InputProps) {
    return (
        <input 
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
        />  
    )
}