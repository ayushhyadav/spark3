import React from 'react';
import './MyAddresses.css';
import AddressForm from './AddressForm';

const AddressFormPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button onClick={onClose}>Close</button>
                <AddressForm />
            </div>
        </div>
    );
}

export default AddressFormPopup;
