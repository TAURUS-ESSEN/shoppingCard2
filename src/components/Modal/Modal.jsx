import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import styles from './modal.module.css'

export default function Modal({title, children, closeModal}) {
    const modalRoot = document.getElementById('root-modal')

    useEffect(()=>{
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKey = (e) => { if (e.key === 'Escape') closeModal() }
        document.addEventListener("keydown", onKey)
        
        return () => {document.body.style.overflow = prev; document.removeEventListener("keydown", onKey)}
    },[closeModal])

    return createPortal(
        <>
            <div className={styles.modalOverlay} onClick={(e)=> {e.currentTarget === e.target && closeModal()}}>
                <div className={styles.modalContent} role="dialog" aria-modal="true" aria-labelledby="modal-title">
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>{title}</h3>
                        <button type="button" onClick={()=>closeModal()} aria-label="Dialog schließen">&times;</button>
                    </div>
                    <span>{children}</span>
                </div>
            </div>
        </>
    , modalRoot)
}