import React, {useState} from 'react'

const Drinks = ({ user, callback }) => {

    const [drink, setDrink] = useState({
        quantity: 0,
        degree: 0
    })

    const [drinks, setDrinks] = useState([])

    const handleAdd = (e) => {
        e.preventDefault();
        setDrinks([...drinks, drink])
        callback({...user, drinks: drinks})
        console.log("step 4 (drinks) ===> ", user);
        setDrink({quantity: 0, degree: 0})
    }


  return (
    <div>
        <p>Ta consommation :</p>
            {drinks.length > 0 && drinks.map(drink => {
                return (
                <ul>
                    <li>{drink.quantity}cl d'alcool à {drink.degree}°</li>
                </ul>
            )})}
            <form>
                <p>Quelle quantité (en cl) :</p>
                <input type="number" min="0" name="quantity" id="quantity" value={drink.quantity} onChange={(e) => setDrink({...drink, quantity: Number(e.target.value)})} />
                <p>Quel degré :</p>
                <input type="number" min="0" name="quantity" id="quantity" value={drink.degree} onChange={(e) => setDrink({...drink, degree: Number(e.target.value)}) } />
                <button type= "submit" onClick={handleAdd}>Ajoute une nouvelle boisson</button>
            </form> 
    </div>
  )
}

export default Drinks