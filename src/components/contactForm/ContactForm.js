import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form  className='col' onSubmit={handleSubmit}>
      <input className='row'
        type="text" 
        name="name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
        placeholder='Nazwa Kontaktu'
      />
      <input className='row'
        type="tel"
        name="phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        required
        placeholder='Numer telefonu' 
      />
      <input className='row'
        type="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        placeholder='Adres email' 
      />
      <input 
        className='row'
        type="submit" 
        value="Dodaj kontakt" 
      />
    </form>
  );
};
