import SearchModule from "../module/SearchModule";
import withAuth from '../HOCs/withAuth.jsx';

const SearchPage = () => {
  return <SearchModule />;
};

export default withAuth(SearchPage);

