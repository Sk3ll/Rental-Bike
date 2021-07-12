import React, { Component } from "react";
import axios from "axios";

class Rental extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.onDelete = this.onDelete.bind(this);
  }
  


  componentDidMount() {
    axios.get("http://localhost:3333/api/rentals").then(items => {
      this.setState({
        items: items.data
      });
    });
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.items !== this.state.items) {
      axios
        .get("http://localhost:3333/api/rentals").then(items => {
          this.setState({
            items: items.data
          });
        });
    }
  }

  onDelete(e) {
    const data = {
      title: e.name,
      typeBike: e.typeBike,
      price: e.price
    };
    axios
      .delete(`http://localhost:3333/api/rentals/${e._id}`)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => console.log(err))
    axios
      .post("http://localhost:3333/api/items/", data).then(() => {
        console.log("Success!")
      })
      .catch(err => console.log(err))
  }
  total() {
    let sum = 0
    this.state.items.map(item => item.price).forEach(item => sum += item);
    if (this.state.items.length >= 20) { return sum/2 } else return sum;
  }
  
  render() {
    return (
        <section className="your-rent">
          <h3>
            🤩 Your rent (total: ${this.total()})
          </h3>
          <ul>
            {this.state.items.map(item => (
              <li key={item._id} className="your-rent__item">
                <span>{item.name} / {item.typeBike} / ${item.price}</span>
                <button className="your-rent__btn" onClick={()=> this.onDelete(item)}>Cancel rent</button>
              </li>
            ))}
          </ul>
        </section>
    );
  }
}
export default Rental;
