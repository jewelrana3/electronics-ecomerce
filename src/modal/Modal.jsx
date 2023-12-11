import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineEye } from 'react-icons/ai';
import useProducts from '../hooks/useProducts';

const AppModal = () => {
  const [products] = useProducts(); // Assuming useProducts returns an array of products
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
                <h2>{selectedProduct.title}</h2>
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
