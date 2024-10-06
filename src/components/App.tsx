import { useEffect } from 'react';

import { useFeedbackItemsStore } from '../stores/feedbackItemsStore';
import HashtagList from './hashtag/HashtagList';
import Container from './layout/Container';

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
