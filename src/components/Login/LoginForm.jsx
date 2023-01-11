import React, {useState} from 'react'

const LoginFrom = ({setUserData}) => {
    // const [name, setName] = useState('')
    // const [email, setemail] = useState('')
    // const [pass, setPass] = useState('')
    // const [npass, setnpass] = useState('')
    // const [state, setState] = useState('')


    const [value, setValue] = useState({
        name: '',
        email: '',
        pass: '',
        npass: '',
        state: ''
    })
    const [errText, setErrorText] = useState('')

    const handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value.name  || !value.email || !value.pass || !value.npass) {
            setErrorText('Some fields are missing')
        } else if(value.name.length < 2) {
            setErrorText('Name is too small')
        } else if(value.pass !== value.npass) {
            setErrorText('passwords do not match')
        } else {
            setUserData(value);
            //api call akr do
        }
    }

    return (
        <form>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Name</span></label>
                <input className="input" name="name" required onChange={handleInputChange}  value={value.name}/>
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Email</span></label>
                <input className="input" name="email" required type="email" value={value.email} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Password</span></label>
                <input className="input"  name="pass" type="password" required value={value.pass} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Re eneter your password</span></label>
                <input className="input" name="npass" type="password" required value={value.npass} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">State</span></label>
                <select value={value.state} onChange={handleInputChange} name="state">
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                    <option value="Punjab">Punjab</option>
                </select>
            </div>
            <div className='err'>{errText}</div>
            <button type="submit" value="Submit" className="button button_wide" onClick={handleSubmit}>Create your account</button>
        </form>
    )
}

export default LoginFrom