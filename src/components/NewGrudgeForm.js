import React, { Component } from 'react';

class NewGrudgeForm extends Component {

  render() {
    return(
      <section className="new-form">
        <h1 className="new-form-title">Add yet another grudge to yer list!</h1>
        <form className="input-form">
          <label>
            Name:
            <input
              type="text"
              name="title"
              className="new-input new-name"
              placeholder="Enter name"
            />
          </label>
          <label>
            What they did:
            <textarea
              type="text"
              name="title"
              className="new-input reason"
              placeholder="Why should they go play in traffic?"
            />
          </label>
          <article className="buttons">
            <input
              type="submit"
              className="save-button"
              value="Save"
            />
            <input
              className="cancel-button"
              value="Cancel"
            />
          </article>
        </form>
      </section>
    )
  }
}

export default NewGrudgeForm;
