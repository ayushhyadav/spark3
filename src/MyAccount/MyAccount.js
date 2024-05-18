import React from 'react'
import './MyAccount.css'

const MyAccount = () => {
    return (
        <div className='top-headers'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="My-Addresses d-flex justify-content-between">
                            <div className='account-heading'>
                                <h1>Account</h1>
                                <p>View and edit your personal info below..</p>
                            </div>
                            <div className="forminfo-btn">
                                <button type="submit" class="btn bd-outline">Discard</button>
                                <button type="submit" class="btn bg-gray">Update Info</button>
                            </div>

                        </div>
                        <address className='MyAccount'>
                            <h2>Personal info</h2>
                            <p>Update your personal information.</p>
                            <div className="loging-email">
                                <h6>Login email:</h6>
                                <p>rahulnamdev.ind@gmail.com</p>
                                <p>Your login email can't be changed.</p>
                            </div>
                        </address>
                    </div>
                    <div className="col-md-12">
                        <div class="row">
                            <div class="col-md-6">
                                <div className="account-info">
                                    <label class="form-label">First name</label>
                                    <input type="text" class="form-control" aria-label="First name" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="account-info">
                                    <label class="form-label">Last name</label>
                                    <input type="text" class="form-control" aria-label="Last name" />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div className="account-info phone">
                                    <label class="form-label">Phone</label>
                                    <input type="text" class="form-control" aria-label="Last name" />
                                </div>
                                <div className="forminfo-btn">
                                    <button type="submit" class="btn bd-outline">Discard</button>
                                    <button type="submit" class="btn bg-gray">Update Info</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;
