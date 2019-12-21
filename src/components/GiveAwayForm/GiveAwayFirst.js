import React,{Component} from "react";



class GiveAwayStepsFirst extends Component {

    render(){
    return (
    <div className="giveAwayStepsFirst flex">
        <span>Zaznacz, co chcesz oddać:</span>
        <form>
            <label><input type="radio" name="reusable-clothes" />
            ubrania, które nadają się do ponownego użycia </label>
            
            <label>
                <input type="radio" name="non-reusable-clothes" />
                ubrania do wyrzucenia
            </label>
            <label>
                <input type="radio" name="toys" />
                zabawki
            </label>
            <label>
                <input type="radio" name="books" />
                książki
            </label>
            <label>
                <input type="radio" name="other" />
                inne
            </label>
                <input className="next__button" type="submit" value="Dalej"/>
        </form>
    </div>
    )
}
}

export default GiveAwayStepsFirst;