import "../Styles/FilterTask.css";

interface Props {
  onSelectCategory: (category: string) => void;
}

const FilterTask = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="rounded border-2 p-2 font-bold"
      onChange={(event) => onSelectCategory(event.target.value)}
      id="filtertask"
    >
      <option value="">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </select>
  );
};

export default FilterTask;
