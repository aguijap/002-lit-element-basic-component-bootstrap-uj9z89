
import { LitElement, html, css } from 'lit-element';

class BasicElement extends LitElement {

  static get properties() {
    return {
      name: { type: String }
    };
  }

  createRenderRoot() {
    return this;
  }
  render(){
    return html`
        <div class="card">
          <h4 class="card-header bg-primary text-white ">Basic component by y</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Name: ${this.name}</li>
            </ul>
        </div>
    `;
  }
}

customElements.define('basic-element', BasicElement);
