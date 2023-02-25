import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChannge = ({ target }) => {
        setInputValue(target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length > 0) {
            onNewCategory( inputValue.trim() );
            setInputValue('');
        }
    };

  return (
    <form onSubmit={ (event) => submit(event) }>
        <input 
            type='text' 
            placeholder='Add Category to search' 
            value={ inputValue }
            onChange={ onInputChannge }
        />
    </form>
  )
}
