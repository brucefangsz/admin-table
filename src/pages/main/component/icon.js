import React, { Component } from 'React';
import { Icon } from 'tinper-bee';
export default class Logo extends Component {
    constructor() {
        super();
    }
    render() {
        let toggle = this.props.toggle;
        return (
            <div>
                {
                    toggle ? (
                        <Icon type="uf-iuap-col" className="nav-icon" />
                    ) : (
                            <img
                                src="//design.yonyoucloud.com/static/img/designer/logo.png"
                            />
                        )
                }
            </div>
        )
    }
}