import { useFeedbackItemsStore } from '../../stores/feedbackItemsStore';

type HashtagItemProps = {
  company: string;
};

export default function HashtagItem({ company }: HashtagItemProps) {
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <li key={company}>
      <button onClick={() => selectCompany(company)}>#{company}</button>
    </li>
  );
}
