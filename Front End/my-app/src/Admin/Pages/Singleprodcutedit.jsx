import React from 'react'
import SidebarWithHeader from '../Components/Sidebar'
import PatchForm from '../Components/SingleEditcomp'

function Singleprodcutedit() {
  return (
    <div><SidebarWithHeader children={<PatchForm />} /></div>
  )
}

export default Singleprodcutedit