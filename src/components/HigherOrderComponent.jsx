import React, { Component } from 'react';

export default class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }

  // display all items
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // filter items based on user type
  filterItems = (userType) => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // filter items based on name starting with "J"
  filterNamesStartingWithJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.name.charAt(0).toUpperCase() === 'J');
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // filter items based on age
filterItemsByAge = () => {
 const data = this.state.userData;
 const filteredData = data.filter((item) => item.age > 28 && item.age <= 50);
 const mapRows = filteredData.map((item) => (
   <React.Fragment key={item.id}>
     <li className="list-elements">
       <span>Id: {item.id}</span>
       <span>Name : {item.name}</span>
       <span>User Type: {item.user_type}</span>
       <span>Age: {item.age}</span>
     </li>
   </React.Fragment>
 ));
 return mapRows;
};

// filter items based on years
getTotalYearsOfDesigners = () => {
 const data = this.state.userData;
 const designersData = data.filter(item => item.user_type === 'Designer');
 const totalYears = designersData.map(item => item.years).reduce((total, years) => total + years, 0);
 return totalYears;
};


  filter() {
    return (
      <React.Fragment>
        <h1>Display designer items</h1>
        <div className="display-box">
          <ul>{this.filterItems('Designer')}</ul>
        </div>
        <h1>Display names starting with "J"</h1>
        <div className="display-box">
          <ul>{this.filterNamesStartingWithJ()}</ul>
        </div>
        <h1>Display items with age greater than 28 and less than or equal to 50</h1>
      <div className="display-box">
        <ul>{this.filterItemsByAge()}</ul>
      </div>
      <h1>Find the total years of the designers</h1>
        <div className="display-box">
          <ul>{this.getTotalYearsOfDesigners ('Designer')}</ul>
      </div>
      </React.Fragment>
    );
  }
  render() {
    return (
      // instead of a parent div tag we can also use React.Fragment
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>
        {this.filter()}
      </React.Fragment>
    );
  }
}
