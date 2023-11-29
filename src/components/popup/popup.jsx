import React from 'react'
import failedImage from "../../Assets/404-error-page-not-found-with-people-connecting-a-plug-rafiki.png";
import successImage from "../../Assets/done-rafiki-2.png"
import PopupCard from '../../components/popup/popupcard';
import correctIcon from '../../Assets/correct.svg';
import wrongIcon from '../../Assets/wrong.png'
import successAnimation from '../../Assets/Animation - 1701147458535.gif'

const ConnectionSuccess = (props) => {
  const data = {title:"Connection test successful.", icon:correctIcon,
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
  const data = {title:"Connection test failed.",icon:wrongIcon,
  image:failedImage,
  paragraph: (
    <>
      Sorry, Due to some unfortunate error the connect test is failed. Please check once or <a href="#">Create New Coonection.</a>
    </>
  ),
}
  return (
      <PopupCard 
      data = {data}
    />
  )
}

const MigrationSuccess = () => {
  const data = {title:"Migration of loremtask attempt successful.",
  image:successAnimation,
  paragraph:"Thanks for being patient, data migration is successful,It will be updated in the job list."
}
  return (
      <PopupCard 
      data = {data}
    />
  )
}

const MigrationFailed = () => {
  const data = {title:"Migration of loremtask attempt failed.",
  image:failedImage,
  paragraph:(
    <>
    Sorry! There might be some error during the process we recommend you to check the steps or <a href='#'>Create New Job</a>.
    </>
  )
}
  return (
      <PopupCard 
      data = {data}
    />
  )
}


export { ConnectionSuccess, ConnectionFailed, MigrationSuccess, MigrationFailed };