interface Props {
  onSelectCategory: (category: string) => void;
}

const FilterTask = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </select>
  );
};

export default FilterTask;
