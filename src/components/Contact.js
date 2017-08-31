import React from "react";

const Contact = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <a key={contact.phone} href="" className="contact-link">
          <li>
            <div>
              <img
                className="profile-pic"
                src={contact.picture.thumbnail}
                alt={`dp of ${contact.name.first} ${contact.name.last}`}
              />
            </div>
            <div>
              <span className="first-name">{contact.name.first}</span>
              <span className="last-name">{contact.name.last}</span>
            </div>
          </li>
        </a>
      ))}
    </div>
  );
};

export default Contact;
