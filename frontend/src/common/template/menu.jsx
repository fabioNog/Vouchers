import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Vouchers' icon='edit'> 
            <MenuItem path='billingCycles'
                label='Cadastrar Vouchers' icon='usd' />
        </MenuTree>
    </ul>
)