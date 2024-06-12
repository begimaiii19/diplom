// Contacts.js

import React from 'react';
import './Contacts.css'; // Импортируем файл стилей

function Contacts() {
    const contacts = [
        { id: 1, name: 'BEGIMAI', email: 'begimai@example.com', phone: '+996 702-45-33-66' },
        { id: 2, name: 'FATIMA', email: 'DIOR@example.com', phone: '+996 500-33-23-33' },
        // Добавьте больше контактов при необходимости
    ];

    return (
        <div className="contacts-container">
            <h2>Contact List</h2>
            <div className="contacts-table-container">
                <table className="contacts-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.5995417556852!2d78.38666766015602!3d42.483087066586336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sen!2skg!4v1716635134251!5m2!1sen!2skg" width="100%" height="400" allowfullscreen="" loading="lazy" title='qwer' referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Contacts;
