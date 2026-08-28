import anya from '../assets/anya.jpg'

function Owner() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">32 Rewat Burantanit (โตโต้) - JSD-13</h1>
            <img src={anya} className="max-w-md w-full h-auto mx-auto m-10" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Short Biography:</h2>
            <p className="max-w-prose mx-auto text-center m-8" >Credo in unum Deum, Patrem omnipotentem, factorem caeli et terrae, visibilium omnium et invisibilium.
Et in unum Dominum Jesum Christum Filium Dei unigenitum.
Et ex Patre natum ante omnia saecula.
Deum de Deo, lumen de lumine, Deum verum de Deo vero.
Genitum, non factum, consubstantialem Patri : per quem omnia facta sunt.
Qui propter nos homines, et propter nostram salutem decendit de caelis.
Et incarnatus est de Spiritu sancto ex Maria Virgine : Et homo factus est.
Crucifixus etiam pro nobis : sub Pontio Pilato passus, et sepultus est.
Et resurrexit tertia die, secundum Scripturas.
Et ascendit in caelum : sedet ad dexteram Patris.
Et iterum venturus est cum gloria, judicare vivos et mortuos : cujus regni non erit finis.
Et in Spiritum sanctum, Dominum, et vivificantem : qui ex Patre Filioque procedit.
Qui cum Patre et Filio simul adoratur, et conglorificatur : qui locutus est per Prophetas.
Et unam, sanctam, catholicam, et apostolicam Ecclesiam.
Confiteor unum baptisma in remissionem peccatorum.
Et expecto resurrectionem mortuorum. Et vitam venturi saeculi.

Amen.</p>
        </div>
    )
}

export default Owner;