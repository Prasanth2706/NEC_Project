// import React from "react";
// import MigrationStatus from ".";
// import { Images } from "../../assets/Images";
// import { useLocation } from "react-router-dom";



// const MigrationInitiated = () => {
//     const location = useLocation();


//     const Initiated = {
//         title: "Migration Initiated…",
//         image: Images.animation,
//         paragraph:
//             "This task will take two-three minutes of time, You can Go Back to home or Wait until the process in completed.",
//     };
//     const Success = {
//         title: "Migration attempt successful.",
//         image: Images.animation,
//         paragraph:
//             "Thanks for being patient, data migration is successful,It will be updated in the job list.",
//     };
//     const Failed = {
//         title: "Migration attempt failed.",
//         image: Images.animation,
//         paragraph: (
//             <>
//                 Sorry! There might be some error during the process. We recommend you to
//                 check the steps or <a href="#">Create New Job.</a>
//             </>
//         ),
//     }
//     return <MigrationStatus data={location.migrationSuccess === 'true' ? Success : location.migrationSuccess === 'false' ? Failed : Initiated} />;
// };
// // data={Initiated} 
// export default MigrationInitiated;

import React, { useEffect } from "react";
import MigrationStatus from ".";
import { Images } from "../../assets/Images";
import { useLocation } from "react-router-dom";

const MigrationInitiated = () => {
  const location = useLocation();
  const migrationSuccess = location.state?.migrationSuccess;

  useEffect(() => {
    console.log("MIGRATION", migrationSuccess)
  }, [])

  const success = {
    title: "Migration attempt successful.",
    image: Images.success,
    paragraph:
      "Thanks for being patient, data migration is successful. It will be updated in the job list.",
  }
  const failed = {
    title: "Migration attempt failed.",
    image: Images.error,
    paragraph: (
      <>
        Sorry! There might be some error during the process. We recommend you to
        check the steps or <a href="#">Create New Job.</a>
      </>
    ),
  }
  const initaite = {
    title: "Migration Initiated…",
    image: Images.animation,
    paragraph:
      "This task will take two-three minutes of time. You can Go Back to home or Wait until the process in completed.",
  }

  useEffect(() => {
    if (migrationSuccess === 'intiate') {
      localStorage.removeItem('step3')
    }
  }, [])

  //   const getMigrationStatusData = () => {


  // debugger

  //     if (migrationSuccess === true) {

  //       return {
  //         title: "Migration attempt successful.",
  //         image: Images.animation,
  //         paragraph:
  //           "Thanks for being patient, data migration is successful. It will be updated in the job list.",

  //       };
  //     } else if (migrationSuccess === false) {
  //       return {
  //         title: "Migration attempt failed.",
  //         image: Images.animation,
  //         paragraph: (
  //           <>
  //             Sorry! There might be some error during the process. We recommend you to
  //             check the steps or <a href="#">Create New Job.</a>
  //           </>
  //         ),
  //       };
  //     } else {
  //       return {
  //         title: "Migration Initiated…",
  //         image: Images.animation,
  //         paragraph:
  //           "This task will take two-three minutes of time. You can Go Back to home or Wait until the process in completed.",
  //       };
  //     }
  //   };


  return (
    <>
      <MigrationStatus data={migrationSuccess === 'Success' ? success : migrationSuccess === 'Failed' ? failed : initaite} />
    </>
  )

};

export default MigrationInitiated;


