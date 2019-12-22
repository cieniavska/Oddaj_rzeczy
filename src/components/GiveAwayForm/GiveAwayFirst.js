import React,{Component} from "react";



class GiveAwayStepsFirst extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reusableClothes: false,
            nonReusableClothes: false,
            toys: false,
            books: false,
            other: false,
            allItems: []
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }
    

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        this.state.allItems.push(name);
      }

    render(){
    return (
    <div className="giveAwayStepsFirst flex">
        <span>Zaznacz, co chcesz oddać:</span>
        <form>
            <label><input type="checkbox" checked={this.state.reusableClothes} id="reusableClothes" name="reusableClothes" onChange={this.handleInputChange}/>
            ubrania, które nadają się do ponownego użycia
            </label>
            <label>
                <input type="checkbox" checked={this.state.nonReusableClothes} id="nonReusableClothes" name="nonReusableClothes" onChange={this.handleInputChange} />
                ubrania do wyrzucenia
            </label>
            <label>
                <input type="checkbox" checked={this.state.toys} id="toys" name="toys" onChange={this.handleInputChange} />
                zabawki
            </label>
            <label>
                <input type="checkbox" checked={this.state.books} id="books" name="books" onChange={this.handleInputChange}/>
                książki
            </label>
            <label>
                <input type="checkbox" checked={this.state.other} id="other" name="other" onChange={this.handleInputChange}/>
                inne
            </label>
                <button className="next__button">Dalej</button>
        </form>
    </div>
    )
}
}

export default GiveAwayStepsFirst;