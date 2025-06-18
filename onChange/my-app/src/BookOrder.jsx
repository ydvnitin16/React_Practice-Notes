import { useState } from 'react';

function BookOrder() {
    const [name, setname] = useState('Guest');
    const [quantity, setquantity] = useState(0);
    const [instruction, setinstruction] = useState('');
    const [payment, setpayment] = useState('');
    const [mode, setmode] = useState('Pick Up');
    const [showhideDetails, setshowhideDetails] = useState(false);

    const handleNameChange = (e) => setname(e.target.value);

    return (
        <>
            <form id="form">
                <input
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Enter your name here."
                />
                <select
                    onChange={(e) => setquantity(e.target.value)}
                    name="quantity"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <textarea
                    onChange={(e) => setinstruction(e.target.value)}
                ></textarea>
                <select
                    onChange={(e) => setpayment(e.target.value)}
                    name="quantity"
                >
                    <option value="">select an option</option>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                    <option value="Visa">Visa</option>
                    <option value="Master Card">Master Card</option>
                    <option value="Gift Card">Gift Card</option>
                </select>
                <label>
                    <input
                        type="radio"
                        value="Pick Up"
                        onClick={() => setmode('Pick Up')}
                        checked={mode === 'Pick Up'}
                    />
                    Pick Up
                </label>
                <label>
                    <input
                        type="radio"
                        value="Delivery"
                        onClick={() => setmode('Delivery')}
                        checked={mode === 'Delivery'}
                    />
                    Delivery
                </label>
                <button onClick={(e) => {e.preventDefault(); setshowhideDetails(!showhideDetails)}}>
                   {showhideDetails? "Cancel Order" : "Order" }
                </button>
            </form>
            {
                showhideDetails && (<div>
                <p>Name: {name}</p>
                <p>Quantity: {quantity}</p>
                <p>Instruction: {instruction}</p>
                <p>Payment: {payment}</p>
                <p>Mode: {mode}</p>
            </div>)
            }
            
        </>
    );
}

export default BookOrder;
