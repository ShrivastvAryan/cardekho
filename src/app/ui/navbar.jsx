import React from "react";
import{Tabs,TabList,Tab, AvatarGroup,Avatar,Link,TabPanels,TabPanel} from '@chakra-ui/react'

const Navbar=()=>{
    return(
        <>
        <div className="w-full bg-white shadow-md h-14 p-2 flex relative">
        <div className="mx-auto">
        <Tabs variant='soft-rounded' colorScheme='red'>
        <TabList>
        <Tab>Home</Tab>
        <Tab>Discover Cars</Tab>
        <Tab>Electric Cars</Tab>
        <Tab>About Us</Tab>
       </TabList>
      

       <TabPanels>
         <TabPanel>
          <a href="/"></a>
         </TabPanel>
         <TabPanel>
          <a href="/discovercars"></a>
         </TabPanel>
       </TabPanels>
       </Tabs>

       </div>
       <div>
        <AvatarGroup>
        <Avatar bg='red.500' className="cursor-pointer" size="sm" className="m-2"/>
        </AvatarGroup>
       </div>
        </div>
        </>
    )
}

export default Navbar