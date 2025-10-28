import Modal from './Modal';

export default function Checkout({closeModal}) {

    return (
        <>
            <Modal title='Checkout' closeModal={closeModal}>
                <div className='bg-white w-80 md:w-100 h-auto p-4 rounded text-base'>
                    Diese Funktion dient nur zu Demonstrationszwecken.
                    Ein echter Kaufvorgang ist in diesem Projekt nicht vorgesehen, da es sich um ein Portfolio-Projekt handelt.
                    <div className="flex justify-center">
                        <img
                            src="./checkoutWorm.png"
                            width="80"
                            height="80"
                            alt="Illustration eines freundlichen Wurms, der sich entschuldigt"
                            loading="lazy"
                        />
                    </div>
                    <div className="text-center mt-3">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="border border-secondary text-secondary px-4 py-2 
                        rounded-lg hover:bg-secondary hover:text-white transition"
                        autoFocus
                    >
                        Zurück zum Shop
                    </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}