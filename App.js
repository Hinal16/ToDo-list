import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }
  updateInput(key, value) {
    this.setState({
      [key]: value

    });
  }
  addItem() {    //create item
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copy current list of item
    const list = [...this.state.list];

    // add new item to list
    list.push(newItem);
    //update state with new list and reset new item input 

    this.setState({
      list,
      newItem: ""

    });
  }

  deleteItem(id) {
    //copy current list of item
    const list = [...this.state.list];

    //filterout item being delete
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div  class="main_div">
        <div class="container">
          <h1>ToDo List</h1>
      <br />
          <input type="text" placeholder="Type item here ..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button class="button1" onClick={() => this.addItem()}>
             +
          </button>

          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button class="button2" onClick={() => this.deleteItem(item.id)}>
                    x
                </button>
                </li>
              )
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
