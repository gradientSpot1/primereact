import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class MegaMenuDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { MegaMenu } from 'primereact/megamenu';

export class MegaMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                items: [
                    [
                        {
                            label: 'Video 1',
                            items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                        },
                        {
                            label: 'Video 2',
                            items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Video 3',
                            items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                        },
                        {
                            label: 'Video 4',
                            items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
                items: [
                    [
                        {
                            label: 'User 1',
                            items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                        },
                        {
                            label: 'User 2',
                            items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'User 3',
                            items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                        },
                        {
                            label: 'User 4',
                            items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'User 5',
                            items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                        },
                        {
                            label: 'User 6',
                            items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                items: [
                    [
                        {
                            label: 'Event 1',
                            items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                        },
                        {
                            label: 'Event 2',
                            items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Event 3',
                            items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                        },
                        {
                            label: 'Event 4',
                            items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Setting 1',
                            items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                        },
                        {
                            label: 'Setting 2',
                            items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                        },
                        {
                            label: 'Setting 3',
                            items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                        }
                    ]
                ]
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Horizontal</h5>
                    <MegaMenu model={this.items} />

                    <h5>Vertical</h5>
                    <MegaMenu model={this.items} orientation="vertical" />
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import {MegaMenu} from 'primereact/megamenu';

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                    },
                    {
                        label: 'Video 2',
                        items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                    },
                    {
                        label: 'Video 4',
                        items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                    },
                    {
                        label: 'User 2',
                        items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                    },
                    {
                        label: 'User 4',
                        items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                    },
                    {
                        label: 'User 6',
                        items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                    },
                    {
                        label: 'Event 2',
                        items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                    },
                    {
                        label: 'Event 4',
                        items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                    },
                    {
                        label: 'Setting 2',
                        items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                    },
                    {
                        label: 'Setting 3',
                        items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                    }
                ]
            ]
        }
    ];

    return (
        <div>
            <h3>Horizontal</h3>
            <MegaMenu model={items}/>

            <h3>Vertical</h3>
            <MegaMenu model={items} orientation="vertical"/>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import {MegaMenu} from 'primereact/megamenu';

const MegaMenuDemo = () => {

    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                    },
                    {
                        label: 'Video 2',
                        items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                    },
                    {
                        label: 'Video 4',
                        items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                    },
                    {
                        label: 'User 2',
                        items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                    },
                    {
                        label: 'User 4',
                        items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                    },
                    {
                        label: 'User 6',
                        items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                    },
                    {
                        label: 'Event 2',
                        items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                    },
                    {
                        label: 'Event 4',
                        items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                    },
                    {
                        label: 'Setting 2',
                        items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                    },
                    {
                        label: 'Setting 3',
                        items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                    }
                ]
            ]
        }
    ];

    return (
        <div>
            <h3>Horizontal</h3>
            <MegaMenu model={items}/>

            <h3>Vertical</h3>
            <MegaMenu model={items} orientation="vertical"/>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight lang="js">
{`
import { MegaMenu } from 'primereact/megamenu';
`}
</CodeHighlight>

                        <h3>MenuItem API</h3>
                        <p>MegaMenu uses the common menu item api to define its items, visit <Link to="/menumodel">  MenuModel </Link> for details.</p>

                        <h3>Getting Started</h3>
                        <p>Layout of the MegaMenu is managed by the <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> that can be downloaded from npm.</p>

<CodeHighlight lang="js">
{`
npm install primeflex --save
`}
</CodeHighlight>

                        <p>MegaMenu requires a collection of menuitems as its model.</p>

<CodeHighlight lang="js">
{`
const items: [
    {
        label: 'Videos', icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                },
                {
                    label: 'Video 2',
                    items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                },
                {
                    label: 'Video 4',
                    items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Users', icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                },
                {
                    label: 'User 2',
                    items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                },
            ],
            [
                {
                    label: 'User 3',
                    items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                },
                {
                    label: 'User 4',
                    items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                },
                {
                    label: 'User 6',
                    items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                }
            ]
        ]
    },
    {
        label: 'Events', icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                },
                {
                    label: 'Event 2',
                    items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                },
                {
                    label: 'Event 4',
                    items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                }
            ]
        ]
    },
    {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                },
                {
                    label: 'Setting 2',
                    items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                },
                {
                    label: 'Setting 3',
                    items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                }
            ]
        ]
    }
]
`}
</CodeHighlight>

<CodeHighlight>
{`
<MegaMenu model={items} />
`}
</CodeHighlight>

                        <h3>Orientation</h3>
                        <p>Default orientation is "horizontal" with "vertical" as the alternative.</p>
<CodeHighlight>
{`
<MegaMenu model={items} orientation="vertical"/>
`}
</CodeHighlight>

                        <h3>Custom Content</h3>
                        <p>Any content inside the megamenu will be displayed on the right side by default. You may use ".ui-megamenu-custom" style class to change the location of the content.</p>
<CodeHighlight>
{`
<MegaMenu model={items}>
    <InputText placeholder="Search" type="text"/>
    <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
</MegaMenu>
`}
</CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>id</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Unique identifier of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of menuitems.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>orientation</td>
                                        <td>string</td>
                                        <td>horizontal</td>
                                        <td>Defines the orientation, valid values are horizontal and vertical.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Element</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>p-megamenu</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menu-list</td>
                                        <td>List element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem</td>
                                        <td>Menuitem element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem-text</td>
                                        <td>Label of a menuitem.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menuitem-icon</td>
                                        <td>Icon of a menuitem.</td>
                                    </tr>
                                    <tr>
                                        <td>p-submenu-icon</td>
                                        <td>Arrow icon of a submenu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="MegaMenuDemo" sources={this.sources} />
                    </TabPanel>
                </TabView>
            </div>
        )
    }

}
