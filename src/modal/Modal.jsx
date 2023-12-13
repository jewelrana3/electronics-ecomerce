import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineEye } from 'react-icons/ai';
import useProducts from '../hooks/useProducts';
import { CiShoppingCart } from 'react-icons/ci';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import './Modal.css'
const AppModal = () => {
  const [products] = useProducts();
  console.log(products)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
    console.log(product)
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => openModal(products[0])}>
        <AiOutlineEye />
      </button>

      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Product Modal"
          style={{
            content: {
              padding: '20px',
              margin: 'auto',
              width: '80%',
              height: '70%',
            },
          }}
        >
          <div className='flex justify-between'>
            <div className='flex'>
              <div>
                <img className='w-96 h-96' src={selectedProduct.image} alt="" />
              </div>
              <div className='ml-40'>
                <h2 className='text-4xl text-bold'>{selectedProduct.title}</h2>
                <p className='mt-6'>{selectedProduct.description}</p>

                <div className={''}>
                  <button className="add_to_cart_two w-full bg-black text-white">
                    <div className="flex items-center justify-center gap-5">
                      <div><CiShoppingCart className="text-2xl" /></div>
                      <div>Add To Cart</div>
                    </div>
                  </button>
                </div>

                <p className='mt-3'>SUK:{selectedProduct.suk}</p>
                <p className='mt-2'><span>Categories</span>:{selectedProduct.category}</p>
                <div className='flex mt-2 items-center'>
                  <p>Tags:</p>
                  <div className='flex cursor-pointer ml-2'>
                    <p className='border border-gray-300 cast'>Tabel</p>
                    <p className='border border-gray-300 cast'>TECAST</p>

                  </div>
                </div>
                <div className='flex items-center mt-4'>
                  <p>Share : </p>
                  <div className='flex gap-2'>
                    <p><FaFacebookF /></p>
                    <p><FaInstagram /></p>
                    <p><FaTwitter></FaTwitter></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button onClick={closeModal}>X</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AppModal;
