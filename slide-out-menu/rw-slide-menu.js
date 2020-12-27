class RwSlideMenu extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
    // Elements
    this._$frame = null;
    // Data
    this._open = false;
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
        .frame {
          position: fixed;
          top: 0;
          bottom: 0;
          width: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1000;
          transition: background-color 300ms ease-in;
        }

        .container {
          width: 80%;
          max-width: 400px;
          background-color: white;
          height: 100%;
          transform: translateX(-102%);
          will-change: transform;
          transition: transform 300ms ease-in;
          box-shadow: 1px 0 3px rgba(51, 51, 51, 0.25);
        }

        .title {
          display: flex;
          flex-direction: row;
          min-height: 3.2em;
          font-size: 1.5em;
          background-color: #F1F1F1;
          color: #666;
        }

        .title .title-content {
          flex-grow: 1;
          display: flex;
          align-items: center;
          padding-left: 1em;
        }

        .close {
          flex-basis: 100px;
          flex-grow: 0;
          flex-shrink: 0;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
        }

        .frame.open {
          pointer-events: auto;
          background-color: rgba(0,0,0,0.25);
        }

        .frame.open .container {
          transform: none;
        }
      </style>
      <div class="frame">
        <nav class="container">
          <div class="title">
            <div class="title-content">
              Menu
            </div>
            <a class="close">&#10006;</a>
          </div>

          <div class="content">
            <a href="#">Menu Item One</a>
          </div>
        </nav>
      </div>
    `;
  }
}

window.customElements.define('rw-slide-menu', RwSlideMenu);