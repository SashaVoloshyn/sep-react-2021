import React, {useState} from 'react';

const Form = ({filter}) => {
    let [form, setForm] = useState({name: '', username: '', email: ''});

    const handler = (event) => {
        const formHandler={...form, [event.target.name]: event.target.value}
        setForm({...form, ...formHandler});

    }

    const formFilter = (event) => {
        event.preventDefault();
        filter(form);

    }

    return (
        <div>
            <form>
                <label><input type="text" name={'name'} value={form.name} onChange={handler}/></label>
                <label><input type="text" name={'username'} value={form.username} onChange={handler}/></label>
                <label><input type="text" name={'email'} value={form.email} onChange={handler}/></label>
                <button onClick={formFilter}>filter</button>
            </form>
        </div>
    );
};

export default Form;