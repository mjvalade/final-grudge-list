import React, { Component } from 'react';
import axios from 'axios';


class NewGrudgeForm extends Component {
  constructor() {
    super();
    this.state = {
      grudgesList: [],
    };
  }

  postNewGrudge() {
    const { getGrudges } = this.props;

    let grudge = {
      name: this.storeName.value,
      description: this.storeDescription.value
    };
    axios.post('/post', {
      grudge
    })
    .then((response) => {
      this.setState({grudgesList: "http://localhost:3001/api/" + response.data});
      getGrudges();
    })
    .catch((error) => {
      console.log(error);
      this.setState({grudgesList: error});
    });
  }

  // clearInputs() {
  //   const { draftGrudge } = this.state;
  //   this.setState({ draftGrudge: '' });
  // }

  render() {
    let input;

    return(
      <section className="new-form">
        <h1 className="new-form-title">Add yet another grudge to yer list!</h1>
        <form className="input-form"
          onSubmit={(e) => {
            e.preventDefault()
            this.postNewGrudge()
        }}>
          <label>
            Name:
            <input
              type="text"
              name="title"
              className="new-input new-name"
              placeholder="Enter name"
              ref={(node) => this.storeName = node}
            />
          </label>
          <label>
            What they did:
            <input
              type="text"
              name="title"
              className="new-input reason"
              placeholder="Go play in traffic!"
              ref={(node) => this.storeDescription = node}
            />
          </label>
          <article className="buttons">
            <input
              type="submit"
              className="save-button"
              value="Save"
            />
            <button
              className="clear-button"
              onClick={(e) => {
                e.preventDefault()
                this.clearInputs()}}
            > Clear
            </button>
          </article>
        </form>
      </section>
    )
  }
}

export default NewGrudgeForm;
