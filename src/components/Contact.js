import React from 'react'

const Contact = ({contacts}) => {
  return (
    <div>
      {
        console.log(contacts.results)
      }
      {
        contacts.results.map((contact) => (
          <li key={contact.phone}>{contact.name.first} {contact.name.last}</li>
          ))
      }
    </div>
  )
}

export default Contact
