import React from 'react';

function FormContact(){
    return(
        <div>
            <h1>Contact</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default FormContact;