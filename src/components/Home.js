import IndexAnimes from "./animes/IndexAnimes"
import ShowAnimes from "./animes/ShowAnimes"


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<IndexAnimes/>
			<ShowAnimes/>
		</>
	)
}

export default Home
