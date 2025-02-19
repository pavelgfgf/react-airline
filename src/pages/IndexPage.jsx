import withAuth from '../HOCs/withAuth.jsx';
import IndexModule from '../module/IndexModule/index.jsx'

const IndexPage = () => {
    return <IndexModule />
}

export default withAuth(IndexPage);
