import React from 'react';
import './Privacy.css'

const Privacy = () => {
    return (
        <div className=' mb-32'>
            <div className='mt-32 text-center'>
                <h1 className='text-5xl font-bold'>Privacy Policy</h1>
                <p className='mt-5 text-xl'>Your privacy is important to us. It is Harry’s policy to respect your privacy regarding <br />
                    any information we may collect from you across our website, https:// Harry.com, <br />
                    and other sites we own and operate.</p>
            </div>
            <div className='privacy mt-40 mx-auto py-10 px-20'>
                <div>
                    <h4 className='text-xl font-semibold'>Effective date: May 25, 2023</h4>
                    <p className='mt-3'>Harry knows that you care about how your personal information is used and shared, and Harry takes your privacy seriously. Please read the following to learn more about Harry Privacy Policy (“Privacy Policy”). This Privacy Policy also tells you about your rights and choices with respect to your Personal Information, and how you can reach us to update your contact information or get answers to questions you may have about our privacy practices.</p>
                    <p className='mt-3'>By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that Harry will collect, use, and share your information in the following ways. Remember that your use of Services is at all times subject to the Terms as set forth at https://harry.com/legal/terms, which incorporate this Privacy Policy. Any terms Harry uses in this Privacy Policy without defining them have the definitions given to them in the Terms.</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold mt-5'>Information Collection</h3>
                    <p className='mt-4'>You can visit and enjoy our Website without disclosing any Personal Information about yourself. However, for the Service to work properly we will need you to share with us certain Personal Information.</p>
                    <p className='mt-4'>For the purposes of this Privacy Policy, “Personal Information” means information that identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, with a particular consumer, device or household. It does not include de-identified or aggregate information, or public information lawfully available from governmental records.</p>
                </div>
                <div>
                    <h2 className='text-4xl font-bold my-5'>Use of Personal Information</h2>
                    <ul>
                        <li><span className='text-4xl font-bold mr-2'>.</span>To provide and maintain the Service;</li>
                        <li><span className='text-4xl font-bold mr-2'>.</span>To detect, prevent and address technical issues;</li>
                        <li><span className='text-4xl font-bold mr-2'>.</span>To register you as a user and to provide the services you require;</li>
                        <li><span className='text-4xl font-bold mr-2'>.</span>To notify you about changes to our Service;</li>
                        <li><span className='text-4xl font-bold mr-2'>.</span>To provide customer care and support;</li>
                    </ul>

                </div>
                <div className='mt-5'>
                    <h2 className='text-4xl font-bold'>Contact us</h2>
                    <p className='mt-3'>You may contact us at any time via:</p>
                    <p>Email: support@harry.com</p>
                    <p className='mt-3'>harry PTY LTD <br /> 4270, Brisbane, Australia</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;