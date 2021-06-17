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
    <form  onSubmit={handleSubmit}>
      <input
        type="text" 
        name="name" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
        placeholder='Nazwa Kontaktu'
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        required
        placeholder='Numer telefonu' 
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        placeholder='Adres email' 
      />
      <input 
        type="submit" 
        value="Dodaj kontakt" 
      />
    </form>
  );
};
