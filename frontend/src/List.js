import React, { useState } from 'react'
import PropTypes from "prop-types";


const List = ({ contacts, onDeleteContact }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (searchTerm) => {
        setSearchTerm(searchTerm.trim());
    }

    const ShowContacts = searchTerm === "" ? contacts
    : contacts.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));


    const ShowAll = () => {
        setSearchTerm("");
    }

    return (
        <>

            <div className="list-contacts">
                <input type="text" placeholder="Search" value={searchTerm} 
                onChange={(e) => handleChange(e.target.value)} />
                {   
                    ShowContacts.length !== contacts.length && (
                        <div className="show-all">{ShowContacts.length} of {contacts.length} contacts 
                            <button onClick={ () => {ShowAll()} }>Show All</button>
                        </div>
                    ) 
                }
            </div>
            <ol>
                {
                    ShowContacts.map((item) => {
                        return (
                            <li key={item.id} className="listing">
                                <img src={item.avatarURL} alt={item.name} />
                                <h4>{item.name}
                                    <span>@{item.handle}</span>
                                </h4>
                                <button onClick={() => onDeleteContact(item)} >Remove</button>
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}

List.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default List