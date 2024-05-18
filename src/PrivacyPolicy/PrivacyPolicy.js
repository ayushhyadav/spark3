import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <div className='top-spacing'>
            <div className='container spaceing-box'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='term-headings'>
                            <h2>Privacy Policy</h2>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='conditions-per'>
                            <p>A privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, and manages the data of its visitors and customers. It fulfills a legal requirement to protect a visitor or client's privacy.
                            </p>
                            <p>Countries have their own laws with different requirements per jurisdiction regarding the use of privacy policies. Make sure you are following the legislation relevant to your activities and location.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hori-line' />
            <div className='container spaceing-box'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='Conditions-header'>
                            <h2>In general, what should you cover in your Privacy Policy?</h2>
                        </div>                </div>
                    <div className='col-md-6'>
                        <div className='Conditions-points'>
                            <ul>
                                <li>What type of information do you collect?</li>
                                <li>How do you collect information?</li>
                                <li>Why do you collect such personal information?</li>
                                <li>How do you store, use, share and disclose your site visitors' personal information?</li>
                                <li>Is your service targeting and collecting information from minors?</li>
                                <li>Privacy policy updates</li>
                                <li>Right to suspend or cancel member account</li>
                                <li>Indemnification</li>
                                <li>Limitation of liability</li>
                                <li>Right to change and modify Terms</li>
                                <li>Preference of law and dispute resolution</li>
                                <li>Contact Information</li>
                            </ul>
                            <div className='text-bottom'>
                                <p>
                                You can check out this support article to receive more information about how to create a privacy policy.
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
export default PrivacyPolicy;



