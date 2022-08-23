import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'form-test',
  styleUrl: 'form-test.scss',
  shadow: true,
})
export class FormTest {

  @State() value: string;

  @Prop({ mutable: true }) userName: string;

  handleSubmit(e: Event) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend
  }

  handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  onUserInput(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }


  render() {
    let elementToRender = (
      <form class="bg-slate-500 p-4 w-60" onSubmit={(e) => this.handleSubmit(e)}>
        <h1>Hi, I am {this.userName}</h1>
        <label>
          Name:
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />

        <br />
        <input type="text" class="my-input-textbox" onInput={this.onUserInput.bind(this)} value={this.userName}></input>
      </form>);

    return elementToRender;
  }

}
