import React from 'react'
import './TermAndConditions.css'

const TermAndConditions = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='term-headings'>
                            <h2>Terms & Conditions</h2>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='conditions-per'>
                            <p>Terms and conditions (“Terms”) are a set of legal terms defined by the owner of a website. They set forth the terms and conditions governing the activities of the website visitors on the said website and the relationship between the site visitors and the website owner.
                            </p>
                            <p>Terms must be defined according to the specific needs and nature of each website. For example, a website offering products to customers in e-commerce transactions requires Terms that are different from the Terms of a website only providing information.</p>
                            <p>Terms provide the website owner the ability to protect themselves from potential legal exposure.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hori-line' />
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='Conditions-header'>
                            <h2>In general, what should you cover in your Terms & Conditions?</h2>
                        </div>                </div>
                    <div className='col-md-6'>
                        <div className='Conditions-points'>
                            <ul>
                                <li>Who can use your website; what are the requirements to create an account (if relevant)</li>
                                <li>Key commercial Terms offered to customers</li>
                                <li>Payment Methods (Credit / Debit Cards, PayPal, Offline Payments etc.)</li>
                                <li>Retention of right to change offering</li>
                                <li>Warranties & responsibility for services and products</li>
                                <li>Ownership of intellectual property, copyrights and logos</li>
                                <li>Right to suspend or cancel member account</li>
                                <li>Indemnification</li>
                                <li>Limitation of liability</li>
                                <li>Right to change and modify Terms</li>
                                <li>Preference of law and dispute resolution</li>
                                <li>Contact info</li>
                            </ul>
                            <div className='text-bottom'>
                                <p>
                                    You can check out this support article to receive more information about how to create a Terms and Conditions page.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hori-line" />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='text-bottom2'>
                            <p>
                            The explanations and information provided herein are only general explanations, information and samples. You should not rely on this article as legal advice or as recommendations regarding what you should actually do. We recommend that you seek legal advice to help you understand and to assist you in the creation of your privacy policy. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TermAndConditions;



