import '../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '../node_modules/@polymer/app-layout/app-drawer/app-drawer.js';
import '../node_modules/@polymer/app-layout/app-header/app-header.js';
import '../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js';
import '../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js';
import '../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '../node_modules/@polymer/iron-icons/iron-icons.js';
import '../node_modules/@polymer/iron-media-query/iron-media-query.js';
import '../node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import '../node_modules/@polymer/paper-item/paper-item.js';
import '../node_modules/@polymer/paper-listbox/paper-listbox.js';
import '../node_modules/@polymer/paper-tabs/paper-tabs.js';

// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import {Element as PolymerElement}
    from '../node_modules/@polymer/polymer/polymer-element.js';

// Added "export" to export the MyApp symbol from the module
export class ZapHello extends PolymerElement {

  // Define a string template instead of a `<template>` element.
  static get template() {
    return `
      <style>
        app-toolbar {
          background-color: #dcdcdc;
        }
        .main-header {
          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        }
        paper-tabs {
          --paper-tabs-selection-bar-color: black;
          height: 100%;
          max-width: 640px;
        }
        paper-tab {
          --paper-tab-ink: #aaa;
          text-transform: uppercase;
        }
        [hidden] {
          display: none !important;
        }
      </style>
      <app-drawer-layout force-narrow="">
        <app-drawer id="drawer" slot="drawer">
          <app-toolbar></app-toolbar>
          <!-- Nav on mobile: side nav menu -->
          <paper-listbox selected="{{selected}}" attr-for-selected="name">
            <template is="dom-repeat" items="{{items}}">
              <paper-item name\$="{{item}}">{{item}}</paper-item>
            </template>
          </paper-listbox>
        </app-drawer>
        <app-header-layout>
          <app-header class="main-header" slot="header">
            <app-toolbar>
              <paper-icon-button class="menu-button" icon="menu" drawer-toggle="" hidden\$="{{wideLayout}}"></paper-icon-button>
            </app-toolbar>
            <app-toolbar class="tabs-bar" hidden\$="{{!wideLayout}}">
              <!-- Nav on desktop: tabs -->
              <paper-tabs selected="{{selected}}" attr-for-selected="name">
                <template is="dom-repeat" items="{{items}}">
                  <paper-tab name\$="{{item}}">{{item}}</paper-tab>
                </template>
              </paper-tabs>
            </app-toolbar>
          </app-header>
        </app-header-layout>
      </app-drawer-layout>
      <iron-media-query query="min-width: 600px" query-matches="{{wideLayout}}"></iron-media-query>
`
  }

  constructor() {
    super();
    this.name = 'Motherflipping 3.0 preview';
    this.selected = 'Item One';
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    return {
      name: {
        type: String
      },
      selected: {
        type: String,
        value: 'Item One'
      },

      wideLayout: {
        type: Boolean,
        value: false,
        observer: 'onLayoutChange',
      },

      items: {
        type: Array,
        value: function() {
          return ['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five'];
        }
      }
    }
  }

  onLayoutChange(wide) {
    var drawer = this.$.drawer;

    if (wide && drawer.opened) {
      drawer.opened = false;
    }
  }

}

customElements.define('zap-sample-component', ZapHello);
