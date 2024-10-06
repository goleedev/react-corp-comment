import { useState } from 'react';

import { MAX_CHARACTERS } from '../../lib/constants';
import { useFeedbackItemsStore } from '../../stores/feedbackItemsStore';

export default function FeedbackForm() {
  const [text, setText] = useState<string>('');
  const [showValidIndicator, setShowValidIndicator] = useState<boolean>(false);
  const [showInvalidIndicator, setShowInvalidIndicator] =
    useState<boolean>(false);

  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // basic validation
    if (text.includes('#') && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    addItemToList(text);
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form ${showValidIndicator ? 'form--valid' : ''} ${
        showInvalidIndicator ? 'form--invalid' : ''
      }`}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
