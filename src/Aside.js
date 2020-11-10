import React from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';

import { MdWidgets} from 'react-icons/md';
import {GoPlus} from 'react-icons/go';
import {AiOutlineAreaChart, AiOutlineAlert, AiOutlineAliwangwang, AiOutlinePieChart, AiOutlineLaptop} from 'react-icons/ai'
import {FcAddRow} from 'react-icons/fc';
import {FaRegTrashAlt} from 'react-icons/fa';

class Aside extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // porps -> current tabpage
            // state -> sidebar toggled
        }
    }


    
    render(){

        const{
            sidebarToggled,
            onSidebarToggled,
            // activePage
        }=this.props;

        return(
            <ProSidebar 
                className="pro-sidebar" 
                breakPoint= 'md'
                collapsed={this.props.sidebarCollapsed} 
                toggled={sidebarToggled}
                onToggle={onSidebarToggled}
            >

                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                        >
                        <FcAddRow style={{fontSize: '1.5rem'}}/> 
                        {' Tools'}
                    </div>
                </SidebarHeader> 

                    <SidebarContent>
                        <Menu iconShape="circle">
                            <SubMenu icon={<MdWidgets />} title="Widgets">
                                <MenuItem 
                                suffix={<span className="icon green"><GoPlus /></span>} 
                                prefix={<AiOutlineAreaChart />}>
                                VLRR
                                </MenuItem>
                                <MenuItem 
                                suffix={<span className="icon green"><GoPlus /></span>}
                                prefix={<AiOutlineAlert />}>
                                CoPQM2
                                </MenuItem>
                                <MenuItem suffix={<span className="icon red"><FaRegTrashAlt /></span>}
                                prefix={<AiOutlineAliwangwang />}>
                                PCN
                                </MenuItem>
                                <MenuItem suffix={<span className="icon green"><GoPlus /></span>}
                                prefix={<AiOutlineLaptop />}>
                                OBA/Sorting
                                </MenuItem>
                                <MenuItem suffix={<span className="icon red"><FaRegTrashAlt /></span>}
                                prefix={<AiOutlinePieChart />}>
                                Human Resource
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>

            </ProSidebar>
        )
    }
}

export default Aside;
