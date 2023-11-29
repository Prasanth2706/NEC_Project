//  const fetchdata = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/login');
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         console.log('Error fetching data:', error);
//         return [];
//       }
//     }
    
//     const fetchHomeDetails = async () => {
//       const response = await fetch('http://localhost:5000/login');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     };

//     const HomeScreen = () => {
//         const { data, error, isLoading } = useData();
//         // const { data, error, isLoading } = useQuery('products', fetchProducts);  
      
//         if (isLoading) {
//           return <div>Loading...</div>;
//         }
      
//         if (error) {
//           return <div>Error: {error.message}</div>;
//         }
      
//         return (
//           <div>
//             {/* {data.map(() => (
//               <div key={product.id}>
//                 <p>{product.title}</p>
//                 <p>${product.price}</p>
//               </div>
//             ))} */}
//           </div>
//         );
//       };
      