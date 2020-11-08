import React from 'react';
import Switch from 'react-switch';
import {CgArrowsExchange} from 'react-icons/cg';
import {MdAccountBox} from 'react-icons/md';
import {FaBars} from 'react-icons/fa';

const Cside = (props) => {
    return(
        <div className="cside">
                {
                    props.sidebarToggled? 
                    "":
                    <div className="btn-toggle"><FaBars /></div>
                }
                
                <div className="cside-account"><MdAccountBox /></div>
                <div className="cside-switch">
                    <span><CgArrowsExchange/></span>
                    <span className="block ">
                        <Switch
                        height={16}
                        width={30}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onChange={props.onSidebarCollapsed}
                        checked={props.sidebarCollapsed}
                        onColor="#219de9"
                        offColor="#bbbbbb"
                        />
                    </span>
                </div>


        </div>
    )
}

export default Cside;