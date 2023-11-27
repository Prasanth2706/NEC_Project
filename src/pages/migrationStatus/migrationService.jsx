import React from 'react'
import failedImage from "../../Assets/404-error-page-not-found-with-people-connecting-a-plug-rafiki.png";
import successImage from "../../Assets/done-rafiki-2.png"
import MigrationStatus from '.';




const MigrationInitiated = () => {
  const data = {title:"Migration Initiated…",
  image:successImage,
  paragraph:"This task will take two-three minutes of time, You can Go Back to home or Wait until the process in completed."
}
return (
  
  <MigrationStatus
    data = {data}
  />
)
}

const MigrationSuccess = () => {
  const data = {title:"Migration attempt successful.",
  image:successImage,
  paragraph:"Thanks for being patient, data migration is successful,It will be updated in the job list."
}
  return (
    <MigrationStatus
    data = {data}
  />
  )
}



const MigrationFailed = () => {
  const data = {title:"Migration attempt failed.",
  image:failedImage,
  paragraph:"Sorry! There might be some error during the process we recommend you to check the steps or Create New Job."
}
  return (
    <MigrationStatus
    data = {data}
  />
  )
}


export { MigrationInitiated, MigrationSuccess, MigrationFailed };