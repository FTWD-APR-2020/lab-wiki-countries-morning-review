import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component {
  displayAllCountries = () => {
    return this.props.countries.map(eachCountry => {
      return (
        <Link key={eachCountry.cca3} className="list-group-item list-group-item-action active" to={'/countries/'+ eachCountry.cca3}>
          {eachCountry.name.common}
        </Link>
      )
    })
  }
  render() {
    return (
      <div>
        {this.displayAllCountries()}
      </div>
    );
  }
}

export default CountryList;