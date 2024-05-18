import React from 'react'
import './ShippingPolicy.css'

const ShippingPolicy = () => {
    return (
        <div className='top-spacing'>
            <div className='container spaceing-box'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='term-headings'>
                            <h2>Shipping Policy</h2>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='conditions-per'>
                            <p>A Shipping Policy comes with a number of benefits for both you and your customers. Some benefits are that people will be more likely to shop with you if you have a clear Shipping Policy in place since there won't be any questions about your shipping timeframes or processes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hori-line' />
            <div className='container spaceing-box'>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <div className='Conditions-header'>
                            <h2>In general, what should you cover in your Terms & Conditions?</h2>
                        </div>                </div>
                    <div className='col-md-6'>
                        <div className='Conditions-points'>
                            <ul>
                                <li>Order processing times.</li>
                                <li>Shipping costs</li>
                                <li>Domestic and international shipping options</li>
                                <li>Potential service interruptions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="hori-line" />
            <div className='container spaceing-box'>
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
export default ShippingPolicy;



