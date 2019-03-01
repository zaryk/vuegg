/*
  Components from external libraries (ie. vue-mdc-adapter):
  - PARENT -> external, componegg, egglement
  - CHILDREN -> (none)
 */
const quasarComponents = [

  // --- AjaxBar --- //
  {
    'displayName': 'Ajax Bar',
    'iconName': 'qfAjaxBar',
    'name': 'QAjaxBar',
    'type': 'q-ajax-bar',
    'dependencies': [
      {
        'name': 'quasar-framework',
        'version': '^0.17.20',
        'imports': [
          ['Quasar', 'quasar-framework'],
          'https://unpkg.com/quasar-framework@0.17.20/dist/umd/quasar.mat.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': 240,
    'attrs': {
      'position': 'top',
      'size': '4px',
      'color': 'red',
      'reverse': false,
      'skip-hijack': false
    },
    'styles': {},
    'classes': {},
    'children': [
    ]
  },

  // --- Avatar --- //
  {
    'displayName': 'Avatar',
    'iconName': 'qfAvatar',
    'name': 'QAvatar',
    'type': 'q-breadcrumbs',
    'dependencies': [
      {
        'name': 'quasar-framework',
        'version': '^0.17.20',
        'imports': [
          ['Quasar', 'quasar-framework'],
          'https://unpkg.com/quasar-framework@0.17.20/dist/umd/quasar.mat.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': 240,
    'attrs': {
      'size': '16px',
      'font-size': '18px',
      'color': 'primary',
      'text-color': 'teal-10',
      'icon': 'map',
      'square': true,
      'rounded': false
    },
    'styles': {},
    'classes': {},
    'children': [
    ]
  },

  // --- Badge --- //
  {
    'displayName': 'Badge',
    'iconName': 'qfBadge',
    'name': 'qfBadgeComp',
    'type': 'qf-Badge',
    'dependencies': [
      {
        'name': 'quasar-framework',
        'version': '^0.17.20',
        'imports': [
          ['Quasar', 'quasar-framework'],
          'https://unpkg.com/quasar-framework@0.17.20/dist/umd/quasar.mat.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': 240,
    'attrs': {
      'open': true,
      'toolbar-spacer': true,
      'permanent': false,
      'persistent': true,
      'temporary': false,
      'toggle-on': 'toggleBadge'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'qf-Badge-list',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': [
          {
            'type': 'qf-Badge-item',
            'text': 'Inbox',
            'attrs': {
              'start-icon': 'inbox'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-Badge-item',
            'text': 'Sent Mail',
            'attrs': {
              'start-icon': 'send'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-Badge-item',
            'text': 'Drafts',
            'attrs': {
              'start-icon': 'drafts'
            },
            'styles': {},
            'classes': {}
          }
        ]
      }
    ]
  },

  // --- Banner --- //
  {
    'displayName': 'Banner',
    'iconName': 'qfBanner',
    'name': 'qfBannerComp',
    'type': 'qf-Banner',
    'dependencies': [
      {
        'name': 'quasar-framework',
        'version': '^0.17.20',
        'imports': [
          ['Quasar', 'quasar-framework'],
          'https://unpkg.com/quasar-framework@0.17.20/dist/umd/quasar.mat.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': 240,
    'attrs': {
      'open': true,
      'toolbar-spacer': true,
      'permanent': false,
      'persistent': true,
      'temporary': false,
      'toggle-on': 'toggleBanner'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'qf-Banner-list',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': [
          {
            'type': 'qf-Banner-item',
            'text': 'Inbox',
            'attrs': {
              'start-icon': 'inbox'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-Banner-item',
            'text': 'Sent Mail',
            'attrs': {
              'start-icon': 'send'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-Banner-item',
            'text': 'Drafts',
            'attrs': {
              'start-icon': 'drafts'
            },
            'styles': {},
            'classes': {}
          }
        ]
      }
    ]
  },

  // --- Bar --- //
  {
    'displayName': 'Bar',
    'iconName': 'qfBar',
    'name': 'qfBarComp',
    'type': 'qf-Bar',
    'dependencies': [
      {
        'name': 'quasar-framework',
        'version': '^0.17.20',
        'imports': [
          ['Quasar', 'quasar-framework'],
          'https://unpkg.com/quasar-framework@0.17.20/dist/umd/quasar.mat.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': 240,
    'attrs': {
      'open': true,
      'toolbar-spacer': true,
      'permanent': false,
      'persistent': true,
      'temporary': false,
      'toggle-on': 'toggleBar'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'qf-Bar-list',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': [
          {
            'type': 'qf-Bar-item',
            'text': 'Inbox',
            'attrs': {
              'start-icon': 'inbox'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-Bar-item',
            'text': 'Sent Mail',
            'attrs': {
              'start-icon': 'send'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-Bar-item',
            'text': 'Drafts',
            'attrs': {
              'start-icon': 'drafts'
            },
            'styles': {},
            'classes': {}
          }
        ]
      }
    ]
  },

  // --- BreadCrumbs --- //
  {
    'displayName': 'BreadCrumbs',
    'iconName': 'qfBreadCrumbs',
    'name': 'QBreadcrumbs',
    'type': 'q-breadcrumbs',
    'dependencies': [
      {
        'name': 'quasar-framework',
        'version': '^0.17.20',
        'imports': [
          ['Quasar', 'quasar-framework'],
          'https://unpkg.com/quasar-framework@0.17.20/dist/umd/quasar.mat.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 64,
    'width': '100%',
    'minHeight': 56,
    'minWidth': 120,
    'attrs': {
      'gutter': 'sm',
      'active-color': 'primary',
      'separator': '|',
      'separator-color': 'teal-10',
      'align': 'left'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'q-breadcrumbs-el',
        'attrs': {
          'label': 'Home',
          'icon': 'map'
        },
        'styles': {},
        'classes': {},
        'children': [
        ]
      }
    ]
  },

  // --- DRAWER --- //
  {
    'displayName': 'Drawer',
    'iconName': 'qfDrawer',
    'name': 'qfDrawerComp',
    'type': 'qf-drawer',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'top': 0,
    'left': 0,
    'height': '100%',
    'width': 240,
    'attrs': {
      'open': true,
      'toolbar-spacer': true,
      'permanent': false,
      'persistent': true,
      'temporary': false,
      'toggle-on': 'toggledrawer'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'qf-drawer-list',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': [
          {
            'type': 'qf-drawer-item',
            'text': 'Inbox',
            'attrs': {
              'start-icon': 'inbox'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-drawer-item',
            'text': 'Sent Mail',
            'attrs': {
              'start-icon': 'send'
            },
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-drawer-item',
            'text': 'Drafts',
            'attrs': {
              'start-icon': 'drafts'
            },
            'styles': {},
            'classes': {}
          }
        ]
      }
    ]
  },

  // --- TOP APP BAR --- //
  {
    'displayName': 'TopAppBar',
    'iconName': 'qfToolbar',
    'name': 'qfTopAppBarComp',
    'type': 'qf-top-app-bar',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 64,
    'width': '100%',
    'minHeight': 56,
    'minWidth': 120,
    'attrs': {
      'title': 'My App',
      'fixed': false,
      'short': false,
      'collapsed': false,
      'dense': false,
      'prominent': false,
      'event': 'toggledrawer'
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'qf-top-app-bar-action',
        'attrs': {
          'icon': 'help'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'qf-top-app-bar-action',
        'attrs': {
          'icon': 'file_download'
        },
        'styles': {},
        'classes': {},
        'children': []
      }
    ]
  },

  // --- SELECT --- //
  {
    'displayName': 'Select',
    'iconName': 'qfSelect',
    'name': 'qfSelectComp',
    'type': 'qf-select',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 56,
    'width': 170,
    'minHeight': 56,
    'minWidth': 120,
    'attrs': {
      'label': 'Select',
      'value': 'a',
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': [
      {
        'type': 'option',
        'text': 'Option A',
        'attrs': {
          'value': 'a'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'option',
        'text': 'Option B',
        'attrs': {
          'value': 'b'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'option',
        'text': 'Option C',
        'attrs': {
          'value': 'c'
        },
        'styles': {},
        'classes': {},
        'children': []
      }
    ]
  },

  // --- CHECKBOX --- //
  {
    'displayName': 'Checkbox',
    'iconName': 'qfCheckbox',
    'name': 'qfCheckboxComp',
    'type': 'qf-checkbox',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 40,
    'width': 155,
    'minHeight': 32,
    'minWidth': 32,
    'attrs': {
      'label': 'qf Checkbox',
      'checked': true,
      'indeterminate': true,
      'align-end': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- CARD --- //
  {
    'displayName': 'Card',
    'iconName': 'qfCard',
    'name': 'qfCardComp',
    'type': 'qf-card',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 310,
    'minHeight': 230,
    'width': 300,
    'minWidth': 150,
    'attrs': {},
    'styles': {
      'background-color': '#fff'
    },
    'classes': {},
    'children': [
      {
        'type': 'qf-card-media',
        'attrs': {
          'height': 160,
          'src': 'https://material-components-web.appspot.com/images/16-9.jpg'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'qf-card-header',
        'attrs': {
          'title': 'Title',
          'subtitle': 'Subtitle'
        },
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'qf-card-actions',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': [
          {
            'type': 'qf-card-action-button',
            'text': 'Action 1',
            'attrs': {},
            'styles': {},
            'classes': {}
          }, {
            'type': 'qf-card-action-button',
            'text': 'Action 2',
            'attrs': {},
            'styles': {},
            'classes': {}
          }
        ]
      }
    ]
  },

  // --- LIST --- //
  {
    'displayName': 'List',
    'iconName': 'qfList',
    'name': 'qfListComp',
    'type': 'qf-list',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 163,
    'width': 163,
    'minHeight': 63,
    'minWidth': 120,
    'attrs': {
      'dense': false,
      'bordered': true,
      'two-line': false,
      'avatar-list': false,
      'interactive': false
    },
    'styles': {
      'overflow': 'hidden'
    },
    'classes': {},
    'children': [
      {
        'type': 'qf-list-item',
        'text': 'List item A',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'qf-list-item',
        'text': 'List item B',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': []
      }, {
        'type': 'qf-list-item',
        'text': 'List item C',
        'attrs': {},
        'styles': {},
        'classes': {},
        'children': []
      }
    ]
  },

  // --- BUTTON --- //
  {
    'displayName': 'Button',
    'iconName': 'qfButton',
    'name': 'qfButtonComp',
    'type': 'qf-button',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'text': 'qfButton',
    'height': 36,
    'width': 120,
    'minHeight': 32,
    'minWidth': 64,
    'attrs': {
      'baseline': false,
      'raised': true,
      'unelevated': false,
      'outlined': false,
      'dense': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- FLOATING ACTION BUTTON --- //
  {
    'displayName': 'FAB',
    'iconName': 'qfButton',
    'name': 'qfFABComp',
    'type': 'qf-fab',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 56,
    'width': 56,
    'minHeight': 40,
    'minWidth': 40,
    'attrs': {
      'icon': 'add'
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- RADIO --- //
  {
    'displayName': 'Radio',
    'iconName': 'qfRadio',
    'name': 'qfRadioComp',
    'type': 'qf-radio',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 40,
    'width': 155,
    'minHeight': 32,
    'minWidth': 32,
    'attrs': {
      'label': 'qf Radio',
      'name': 'default-mdc-group',
      'checked': false,
      'align-end': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- LINEAR PROGRESS --- //
  {
    'displayName': 'Progress',
    'iconName': 'qfProgress',
    'name': 'qfLinearProgressComp',
    'type': 'qf-linear-progress',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 3,
    'width': '100%',
    'minHeight': 1,
    'minWidth': 100,
    'attrs': {
      'open': true,
      'accent': false,
      'reverse': false,
      'indeterminate': true,
      'progress': 0.25,
      'buffer': 0.5
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- SWITCH --- //
  {
    'displayName': 'Switch',
    'iconName': 'qfSwitch',
    'name': 'qfSwitchComp',
    'type': 'qf-switch',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 46,
    'width': 130,
    'attrs': {
      'label': 'qf Switch',
      'checked': true,
      'align-end': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

  // --- TEXTFIELD --- //
  {
    'displayName': 'Textfield',
    'iconName': 'qfTextfield',
    'name': 'qfTextfieldComp',
    'type': 'qf-textfield',
    'dependencies': [
      {
        'name': 'vue-mdc-adapter',
        'version': '^0.15.3',
        'imports': [
          ['VueMDCAdapter', 'vue-mdc-adapter'],
          'https://unpkg.com/vue-mdc-adapter@^0.15.3/dist/vue-mdc-adapter.min.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 56,
    'width': 120,
    'minHeight': 56,
    'minWidth': 56,
    'attrs': {
      'label': 'Label',
      'value': 'Textfield',
      'type': 'text',
      'dense': false,
      'box': false,
      'outline': false,
      'fullwidth': false,
      'multiline': false,
      'rows': 100,
      'cols': 100,
      'readonly': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  }
]

export default quasarComponents
