import Liste from './components/Liste/Liste';
import Category from './components/Category/Category';

export default function Shop () {
    return (
        <>
            <div className="shopContainer">
                <div className="productsListe"><Category /></div>
                <div className="checkboxArea"><Liste /></div>
            </div>
        </>
    )
}