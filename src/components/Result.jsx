import React, {useEffect} from 'react'

const Result = ({ user, result }) => {
    let response;

    useEffect(() => {
        // appel de la fonction pour connaître le type de réponse à afficher
        response = responseType();
    }, [result])
   
    // Fonctions pour calculer le résultat :
    // 1- calculer la quantité bue
     const calculateQuantity = () => {
        let result;
        
        const allDrinks = [];

        user.drinks.forEach(drink => {
            allDrinks.push((8 * drink.quantity * drink.degree) / 100)
        })
        result = allDrinks.reduce((acc, cv) => acc + cv, 0);
        console.log("la quantité d'alccol dans le sang est: ", result);
        return result
    }


    // 2 - calculer le taux d'alcoolémie

    const calculateRateAlcool = () => {
        const quantity = calculateQuantity();
        let rate;
        
        // obtenir le taux d'alccol en gramme/litre
        if (user.gender === "homme") {
            rate = quantity / (user.weight * 0.68)
        } else {
            rate = quantity / (user.weight * 0.55)
        }

        console.log("le taux d'alcoolémie est: ", rate);

       return rate;
    }

    // 3 - calcul du temps écoulé depuis le dernier verre
    function timeElapsed () {
        // récupérer l'heure/le jour de la consommation et l'heure/jour de maintenant
        const dayOfDrinks = Number(user.time.slice(8, 10));
        const timeOfDrinks = Number(user.time.slice(11, 16).replace(":", "."));
        const now = new Date().toString();
        const nowDay = Number(now.slice(8, 10))
        const nowTime = Number(now.slice(16, 21).replace(":", "."))

        let timeDiff;

        if (nowDay === dayOfDrinks) {
            timeDiff = nowTime - timeOfDrinks
        } else {
            timeDiff = nowTime + (24 - timeOfDrinks)
        }

        console.log("the time elapsed is ===>", timeDiff);
        return timeDiff;
    }

    // 4 - Mesurer la baisse du niveau d'alcool
    const timeFactor = () => {
        const timeElapsed = timeElapsed();
        const alcoolRate = calculateRateAlcool();
        
        // déterminer combien d'alcool a déjà baissé depuis le dernier verre et combien de temps il reste pour passer sous les 0.5g
        let alcoolRemaining;
        let waitingTime;

        if (user.gender === "homme") {
            alcoolRemaining = alcoolRate - (0.125 * timeElapsed);
            if (alcoolRemaining > 0.5 && alcoolRemaining < 2) {
                waitingTime = Math.floor((alcoolRemaining + 0.5) / -0.125)
            }
        } else {
            alcoolRemaining = alcoolRate - (0.0925 * timeElapsed)
            waitingTime = Math.floor((alcoolRemaining + 0.5) / -0.125)
        }

        return waitingTime;
    }

    // 5 - definir le type de réponse à afficher en fonction du taux d'alcool

    const responseType = () => {
        // (à vérifier : quand le taux est strictement inférieur ou supérieur, ou inférieur/supérieur ou égal)
        let responseType;
        let rate = calculateRateAlcool();

        console.log("le taux d'alcool récupéré dans la fonction réponse est :", rate);
        
       
        if (rate < 0.5) {
            responseType = 1;
        } else if (rate >= 0.5 && rate < 1) {
            responseType = 2;
        } else if (rate >= 1 && rate < 2) {
            responseType = 3;
        } else if (rate >= 2 && rate < 3) {
            responseType = 4;
        } else if (rate >= 3 && rate < 5) {
            responseType = 5;
        } else {
            responseType = 6
        }
        
        console.log("Le type de réponse à afficher est: ", responseType);
        
        return responseType;
    }


  return (
    <div>
        <div>
            {response === 1 && <p>Bravo {user.name}, tu as été raisonnable ! Tu peux rentrer sereinement. </p> }
            {response === 2 && <p>Tu as trop bu {user.name} ! Il va falloir appeler un taxi ou patienter {timeFactor()}h. </p> }
            {response === 3 && <p>Tu devrais boire beaucoup moins {user.name} ! Il va falloir appeler un taxi ou patienter {timeFactor()}h.. </p> }
            {response === 4 && <p>Tu es totalement ivre {user.name} ! Appelles un ami ou dors sur place... </p> }
            {response === 5 && <p>Tu es au bord du coma {user.name} ! Appelles les urgences ! </p> }
            {response === 6 && <p>RIP {user.name}...</p> }
        </div>
    </div>
  )
}

export default Result