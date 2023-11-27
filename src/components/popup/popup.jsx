import React from 'react'
import failedImage from "../../Assets/404-error-page-not-found-with-people-connecting-a-plug-rafiki.png";
import successImage from "../../Assets/done-rafiki-2.png"
// import successIcon from "../../../assets/icons/group-21.svg";
// import failedIcon from "../../../assets/icons/group-copy-3.svg";
import PopupCard from '../../components/popup/popupcard';



const ConnectionSuccess = () => {
  const data = {title:"Connection test successful.",iconClassName:"close-icon",
  image:successImage,
  paragraph:"Thanks for being patient, connection test is successfully completed"
}
return (
  
  <PopupCard 
    data = {data}
  />
)
}

const ConnectionFailed = () => {
  const data = {title:"Connection test failed.",iconClassName:"close-icon",
  image:failedImage,
  paragraph:"Sorry, Due to some unfortunate error the connect test is failed. Please check once or Create New Connection"
}
  return (
      <PopupCard 
      data = {data}
    />
  )
}

const MigrationSuccess = () => {
  const data = {title:"Migration of loremtask attempt successful.",iconClassName:"close-icon",
  image:successImage,
  paragraph:"Thanks for being patient, data migration is successful,It will be updated in the job list."
}
  return (
      <PopupCard 
      data = {data}
    />
  )
}

const MigrationFailed = () => {
  const data = {title:"Migration of loremtask attempt failed.",iconClassName:"close-icon",
  image:failedImage,
  paragraph:"Sorry! There might be some error during the process we recommend you to check the steps or Create New Job."
}
  return (
      <PopupCard 
      data = {data}
    />
  )
}


export { ConnectionSuccess, ConnectionFailed, MigrationSuccess, MigrationFailed };