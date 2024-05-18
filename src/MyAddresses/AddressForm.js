import './MyAddresses.css';


function AddressForm() {
    return (
        <div className="aderssform">
            <h1>Add New Address</h1>
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
    );
}

export default AddressForm;