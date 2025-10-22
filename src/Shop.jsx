import Liste from './components/Liste/Liste';
import Category from './components/Category/Category';

export default function Shop () {
    return (
        <>
            <div className="flex gap-4 mt-5">
                <div className="productsListe"><Category /></div>
                <div className="checkboxArea"><Liste /></div>
            </div>
        </>
    )
}