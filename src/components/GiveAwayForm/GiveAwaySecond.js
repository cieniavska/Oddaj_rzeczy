import React,{Component} from "react";
import Select from 'react-select';


class GiveAwaySecond extends Component {

    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

    handleSubmit = e => {
        e.preventDefault();
        this.sendData(this.state.selectedOption.value)
        console.log(this.state.selectedOption.value)
    };

    sendData = (information) => {
        this.props.parentCallback(information);
   }

    render(){

        const values = [
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'}
        ];

    return (
    <div className="giveAwayStepsSecond flex">
        <span className="giveAwayStepsSecond__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</span>
        <form onSubmit={this.handleSubmit}>
                <Select className="select" name="bagAmount" options={values} value={this.state.value} onChange={this.handleChange}/>
            <div>
                <button className="next__button">Wstecz</button>
                <button className="next__button">Dalej</button>
            </div>
        </form>
    </div>
    )
}
}

export default GiveAwaySecond;