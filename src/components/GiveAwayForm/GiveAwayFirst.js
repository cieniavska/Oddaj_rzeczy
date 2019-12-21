import React,{Component} from "react";



class GiveAwayStepsFirst extends Component {

    render(){
    return (
    <div className="giveAwayStepsFirst flex">
        <span>Zaznacz, co chcesz oddać:</span>
        <form>
            <label><input type="checkbox" name="reusable-clothes" />
            ubrania, które nadają się do ponownego użycia
            </label>
            <label>
                <input type="checkbox" name="non-reusable-clothes" />
                ubrania do wyrzucenia
            </label>
            <label>
                <input type="checkbox" name="toys" />
                zabawki
            </label>
            <label>
                <input type="checkbox" name="books" />
                książki
            </label>
            <label>
                <input type="checkbox" name="other" />
                inne
            </label>
                <button className="next__button">Dalej</button>
        </form>
    </div>
    )
}
}

export default GiveAwayStepsFirst;