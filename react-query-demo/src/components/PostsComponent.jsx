import {usequery} from 'react-query'

const fetchData = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
};
 const postsComponent =() =>{
    const {data: posts, error: isError, isLoading, refetch } =usequery('fetchData', fetchData)
    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

    // Render the fetched data
    return (
        <div>
           <button onClick={() => refetch()}>Refetch Data</button>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
 };

export default postsComponent;