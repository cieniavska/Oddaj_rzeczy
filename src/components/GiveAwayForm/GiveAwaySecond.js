import React,{Component} from "react";

class GiveAwaySecond extends Component {

    state = {
        bagsAmount: 0
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    render(){
    return (
    <div className="giveAwayStepsSecond flex">
        <span className="giveAwayStepsSecond__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
        <form onSubmit={this.handleSubmit}>
        <span>Liczba 60L worków:</span>
        <select
        value={this.state.bagsAmount}
        onChange={this.handleChange}>
            <option value="wybierz">--wybierz--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
                <div>
                    <input className="next__button" type="button" value="Wstecz"/>
                    <input className="next__button" type="submit" value="Dalej"/>
                </div>
        </form>
    </div>
    )
}
}

export default GiveAwaySecond;