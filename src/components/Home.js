import IndexAnimes from "./animes/IndexAnimes"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<IndexAnimes/>
		</>
	)
}

export default Home
