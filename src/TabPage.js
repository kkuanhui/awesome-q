import React from 'react';
import './index.css';
// react-pro-sidebar default css
import 'react-pro-sidebar/dist/css/styles.css';

import Aside from './Aside.js';
import Cside from './Cside.js';
import MyGrid from './MyGrid';



class TabPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarCollapsed: false,
            sidebarToggled: false
        }
    }

    onSidebarCollapsed = () => {
        this.setState({
            sidebarCollapsed: !this.state.sidebarCollapsed
        })
    }

    onSidebarToggled = (value) => {
        this.setState({
            sidebarToggled: value
        })
    }

    render(){
        return(
            <main className="tab-page">
                <Aside 
                sidebarCollapsed={this.state.sidebarCollapsed} 
                onSidebarToggled={this.onSidebarToggled}
                />
                <Cside 
                onSidebarCollapsed={this.onSidebarCollapsed} 
                sidebarCollapsed={this.state.sidebarCollapsed}
                sidebarToggled={this.state.sidebarToggled}
                />
                <div className="mygrid-container">
                    <MyGrid/>
                </div>
            </main>
        )

    }
}

export default TabPage;




