import PropTypes from 'prop-types';

 const SearchInput = ({setSearchInput}) => {
  return (
    <>
      <input
        type="text"
        id="search"
        onChange={(e)=>setSearchInput(e.target.value)}
        className="bg-gray-200 w-[97%] p-2 pl-10 my-5 rounded-3xl"
        placeholder="search"
      />
    </>
  );
};


SearchInput.propTypes={
  setSearchInput:PropTypes.func.isRequired,
}
export default SearchInput