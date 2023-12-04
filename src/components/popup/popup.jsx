import React from 'react'
import PopupCard from '../../components/popup/popupcard';
import { Images } from '../../assets/Images';

const ConnectionSuccess = (props) => {
    const data = {
        title: "Connection test successful.", icon: Images.tickIcon,
        image: Images.doneimage,
        paragraph: "Thanks for being patient, connection test is successfully completed"
    }
    return (

        <PopupCard
            data={data}
        />
    )
}

const ConnectionFailed = (props) => {
    const data = {
        title: "Connection test failed.", icon: Images.cutimage,
        image: Images.errorimage,
        paragraph: (
            <>
                Sorry, Due to some unfortunate error the connect test is failed. Please check once or <a href="#">Create New Coonection.</a>
            </>
        ),
    }
    return (
        <PopupCard
            data={data}
        />
    )
}

const MigrationSuccess = () => {
    const data = {
        title: "Migration of loremtask attempt successful.",
        image: Images.animation,
        paragraph: "Thanks for being patient, data migration is successful,It will be updated in the job list."
    }
    return (
        <PopupCard
            data={data}
        />
    )
}

const MigrationFailed = () => {
    const data = {
        title: "Migration of loremtask attempt failed.",
        image: Images.errorimage,
        paragraph: (
            <>
                Sorry! There might be some error during the process we recommend you to check the steps or <a href='#'>Create New Job</a>.
            </>
        )
    }
    return (
        <PopupCard
            data={data}
        />
    )
}


export { ConnectionSuccess, ConnectionFailed, MigrationSuccess, MigrationFailed };