import React,{Component} from "react";
import Select from 'react-select';


class GiveAwaySecond extends Component {


    state = {
        city: null,
      }

      handleChange = (city) => {
        this.setState({ city });
      }

    handleSubmit = e => {
        e.preventDefault();
        this.sendData(this.state.city.value)
        console.log(this.state.city.value)
    };

    sendData = (information) => {
        this.props.parentCallback(information);
   }

    render(){

        const values = [
            {value: 'Poznań', label: 'Poznań'},
            {value: 'Warszawa', label: 'Warszawa'},
            {value: 'Wrocław', label: 'Wrocław'},
            {value: 'Kraków', label: 'Kraków'},
            {value: 'Katowice', label: 'Katowice'}
        ];

    return (
    <div className="giveAwayStepsThird flex">
        <span className="giveAwayStepsThird__title">Lokalizacja:</span>
        <form onSubmit={this.handleSubmit}>
                <Select className="select" name="city" options={values} value={this.state.value} onChange={this.handleChange}/>
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