import React, { useState } from 'react';
import Modal from 'react-modal';
import './MyAddresses.css';
import AddressForm from './AddressForm';

Modal.setAppElement('#root');

const MyAddresses = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };


    return (
        <div className='top-headers'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="My-Addresses">
                            <h1>My-Addresses</h1>
                            <p>Add and manage the addresses you use often.</p>
                        </div>
                        <address className='address'>
                            Kate Sims
                            500 Terry A Francois Blvd
                            San Francisco, California 94158
                            United States
                        </address>
                        <div className="btn-edit d-flex justify-content-between">
                            <div className="update">
                                <a href="#">Edit</a>
                                <a href="#">Remove</a>
                            </div>
                            <div className="default-btn">
                                <p>Default Address</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="addes">
                            <address className='address'>
                                Kate Sims
                                500 Terry A Francois Blvd
                                San Francisco, California 94158
                                United States
                            </address>
                            <div className="btn-edit d-flex justify-content-between">
                                <div className="update">
                                    <a href="#">Edit</a>
                                    <a href="#">Remove</a>
                                </div>
                                <div className="default-btn">
                                    <p>Make this my default</p>
                                </div>
                            </div>
                        </div>
                        <div className="add-new">
                            <button onClick={openModal}>Add New Address</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add New Address Modal"
                className="popup-content"
                overlayClassName="popup-overlay"
            >
                <div  >
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>
                        <svg preserveAspectRatio="none" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path d="M178.784 173.056L105.728 100l73.056-73.056c1.621-1.621 1.621-4.107 0-5.728s-4.107-1.621-5.728 0L100 94.272 26.944 21.216c-1.621-1.621-4.107-1.621-5.728 0-1.621 1.621-1.621 4.107 0 5.728L94.272 100l-73.056 73.056c-1.621 1.621-1.621 4.107 0 5.728 1.621 1.621 4.107 1.621 5.728 0L100 105.728l73.056 73.056c1.621 1.621 4.107 1.621 5.728 0 1.621-1.621 1.621-4.107 0-5.728z"></path>
                            </g>
                        </svg>
                    </span>
                    <div className="address-form">
                        <h1>Add New Address</h1>
                        <div className='inner-form'>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">*First name</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">*Last name</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Company name</label>
                                <input type="text" class="form-control" id="inputAddress" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address - line 2</label>
                                <input type="text" class="form-control" id="inputAddress" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputAddress" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress" class="form-label d-block">Country</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Country</option>
                                    <option value="1">India</option>
                                    <option value="2">US</option>
                                    <option value="3">UK</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress" class="form-label d-block">Region</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select Region</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Zip / Postal code</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                        Make this my default address
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div className='btn-add d-flex'>
                                    <button type="submit" class="btn add-addres">Add Address</button>
                                    <button type="submit" class="btn">Cancel</button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
</div>
            </Modal>
        </div>
    )
}

export default MyAddresses;
