import { useQuery, gql } from '@apollo/client';

const DisplayFriend = () => {
	const GET_FRIEND = gql`
		query {
			jonathan
		}
	`;
	const { loading, error, data } = useQuery(GET_FRIEND);
	const { jonathan } = data;

	if (loading) return <p>Cargando ...</p>;
	if (error) return <p>Error!!</p>;

	return (
		<div>
			<h1>La persona es:</h1>
			<h3>{jonathan}</h3>
		</div>
	);
};

export default DisplayFriend;
