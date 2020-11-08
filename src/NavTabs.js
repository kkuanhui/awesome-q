import React, {Fragment} from 'react';
import './index.css';

class NavTabs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        }
    };

    onClickTab = (tab) => {
        this.setState(
            {activeTab: tab}
        )
    }

    render(){
        return(
            <div className="nav-tabs">
                <ul className="tabs-ul">
                    <li className="logo">Awesome Q</li>
                    {this.props.children.map((child) => {
                        return(
                            <Tab 
                                label={child.props.label}
                                onClick={this.onClickTab}
                            />
                        )
                    })}
                </ul>
                <div className="tab-page">
                    {this.props.children.map((child) => {
                        if(child.props.label !== this.state.activeTab) return undefined;
                        return child;
                    })}
                </div>
            </div>
        )
    }
}

class Tab extends React.Component{
    render(){
        return(
            <li className="tabs-li" onClick={() => this.props.onClick(this.props.label)}>
                {this.props.label}
            </li>
        )
    }
}

export default NavTabs;
