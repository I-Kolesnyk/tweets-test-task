import { useDispatch } from 'react-redux';

import { useTweetsAmount, useCurrentPage } from 'hooks';
import { setTweetsPerPage, setCurrentPage } from 'redux/pagination/slice';
import { setFilter } from 'redux/filter/slice';

import { LoadMoreBtn, Wrapper } from './LoadMoreButton.styled';

function LoadMoreButton() {
  const tweetsAmount = useTweetsAmount();
  const currentPage = useCurrentPage();
  const dispatch = useDispatch();

  const handleLoadMore = (number, page) => {
    dispatch(setTweetsPerPage(number + 3));
    dispatch(setCurrentPage(page + 1));
    dispatch(setFilter('all'));
  };

  return (
    <Wrapper>
      <LoadMoreBtn onClick={() => handleLoadMore(tweetsAmount, currentPage)}>
        Load more
      </LoadMoreBtn>
    </Wrapper>
  );
}

export default LoadMoreButton;
