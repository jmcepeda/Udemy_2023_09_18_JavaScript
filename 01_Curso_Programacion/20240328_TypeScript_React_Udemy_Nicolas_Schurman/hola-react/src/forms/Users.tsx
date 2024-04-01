import { MouseEventHandler,ChangeEventHandler,useState } from 'react';
import Button from '../components/Button'
import Input from '../components/Input'

type UserFormState = {
    name: string,
    lastname: string,
}

const InitialValue: UserFormState = {
    name: '',
    lastname: '',
}

export default function UserForm () {
    const [form, setForm] = useState(InitialValue)
    const handleClick:MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        console.log("Estos son los valores del Formulario: ", form);
    }
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>{
        const name=e.target.name as keyof UserFormState
        setForm({...form, [name]: e.target.value})
        console.log(e.target.value)
    }

    return (
        <>
            <Input name="name" placeholder='Nombre' handleChange={handleChange} />
            <Input name="lastname" placeholder='Apellido' handleChange={handleChange} />
            <Button handleClick={handleClick}>Hola Mundo</Button>
            </>
    )

}

