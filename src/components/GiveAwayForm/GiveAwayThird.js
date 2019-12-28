import React,{Component} from "react";
import Select from 'react-select';


class GiveAwayThird extends Component {


    state = {
        city: null,
        optionalOrganization: ''
      }

    handleCityChange = (city) => {
        this.setState({ city });
    }

    handleOrganizationChange = (organization) => {
        this.setState({
            optionalOrganization: organization
        });
        console.log(organization)
    }

    handleSubmit = e => {
        e.preventDefault();

        let data = {
            city: this.state.city,
            optionalOrganization: this.state.optionalOrganization
        };

        this.sendData(data)
        console.log("data:", data, "value",this.state.optionalOrganization )
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
                        <div className="giveAwayStepsThird__help__who">dzieciom</div>
                        <div className="giveAwayStepsThird__help__who">samotnym matkom</div>
                        <div className="giveAwayStepsThird__help__who">bezdomnym</div>
                        <div className="giveAwayStepsThird__help__who">niepełnosprawnym</div>
                        <div className="giveAwayStepsThird__help__who">osobom starszym</div>
                    </div>
                </div>
                <label className="giveAwayStepsThird__organization flex">Wpisz nazwę konkretnej organizacji (opcjonalne)
                <textarea value={this.state.optionalOrganization} onChange={this.handleOrganizationChange}></textarea>
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