import styles from './modal.module.css';
import Modal from './Modal';
import { useState } from 'react';

export default function Checkout({closeModal}) {

    return (
        <>
            <Modal title='Checkout' closeModal={closeModal}>
                <div className='bg-white w-80 md:w-100 h-auto p-4 rounded text-base'>
                    Diese Funktion dient nur zu Demonstrationszwecken.
                    Ein echter Kaufvorgang ist in diesem Projekt nicht vorgesehen, da es sich um ein Portfolio-Projekt handelt.
                    <div className="flex justify-center"><img src="./checkoutWorm.png" width="80" height="80" alt="Sorry :)" /></div>
                </div>
            </Modal>
        </>
    )
}