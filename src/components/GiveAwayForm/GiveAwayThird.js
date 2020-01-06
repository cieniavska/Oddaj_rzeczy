import React,{Component} from "react";
import Select from 'react-select';


class GiveAwayThird extends Component {

    state = {
        city: null,
        optionalOrganization: '',
        kids: false,
        mothers: false,
        homeless: false,
        disabled: false,
        elderly: false
      }

    handleCityChange = (city) => {
        this.setState({ city });
    }

    handleOrganizationChange = (organization) => {
        this.setState({
            optionalOrganization: organization.target.value
        });
    }

    handleBtns = e => {
        this.setState({
            [e.target.name]: e.target.value === false ? true : false
        });
        console.log("kids", this.state.kids)
    }

    handleSubmit = e => {
        e.preventDefault();
        let data = {
            city: this.state.city,
            optionalOrganization: this.state.optionalOrganization
        };
        this.sendData(data)
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
                <Select className="select" name="city" options={values} value={this.state.city} onChange={this.handleCityChange}/>
                <div className="giveAwayStepsThird__help flex">
                    <span className="giveAwayStepsThird__help__title">Komu chcesz pomóc?</span>
                    <div className="giveAwayStepsThird__help__box">
                        <button onClick={this.handleBtns} name="kids" className="giveAwayStepsThird__help__who">dzieciom</button>
                        <button onClick={this.handleBtns} name="mothers" className="giveAwayStepsThird__help__who">samotnym matkom</button>
                        <button onClick={this.handleBtns} name="homeless" className="giveAwayStepsThird__help__who">bezdomnym</button>
                        <button onClick={this.handleBtns} name="disabled" className="giveAwayStepsThird__help__who">niepełnosprawnym</button>
                        <button onClick={this.handleBtns} name="elderly" className="giveAwayStepsThird__help__who">osobom starszym</button>
                    </div>
                </div>
                <label className="giveAwayStepsThird__organization flex">Wpisz nazwę konkretnej organizacji (opcjonalne)
                <textarea name="optionalOrganization" value={this.state.optionalOrganization} onChange={this.handleOrganizationChange}></textarea>
                </label>
            <div>
                <button className="next__button">Wstecz</button>
                <button className="next__button">Dalej</button>
            </div>
        </form>
    </div>
    )
}
}

export default GiveAwayThird;