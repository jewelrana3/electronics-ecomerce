import React from 'react';
import { useLoaderData } from 'react-router-dom';

const History = ({ pay }) => {
    console.log(pay)
    const { title, price } = pay;

    <div className=' overflow-x-auto mt-10 '>
        <table className='table'>
            <thead>
                <tr className='text-lg font-semibold'>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody className=''>
                {/* {
                    pay.map((pd, inx) => <tr key={pd._id}>
                        <td>{inx + 1}</td>
                        <td>{pd.title}</td>
                        <td>1</td>
                        <td>{pd.price}</td>
                        <td>{pd.price}</td>
                    </tr>)
                } */}
                <tr>
                    {/* <td>{inx + 1}</td> */}
                    <td>{pay.title}</td>
                    {/* <td>1</td>
                    <td>{pd.price}</td>
                    <td>{pd.price}</td> */}
                </tr>
            </tbody>
        </table>
    </div>
};

export default History;