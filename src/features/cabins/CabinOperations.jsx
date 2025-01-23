import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "no-discount", label: "No Discount" },
  { value: "with-discount", label: "With Discount" },
];

const sortOptions = [
  { value: "name-asc", label: "Sort by Name (A-Z)" },
  { value: "name-desc", label: "Sort by Name (Z-A)" },
  { value: "regularPrice-asc", label: "Sort by Price (Low to High)" },
  { value: "regularPrice-desc", label: "Sort by Price (High to Low)" },
  { value: "maxCapacity-asc", label: "Sort by Capacity (Low to High)" },
  { value: "maxCapacity-desc", label: "Sort by Capacity (High to Low)" },
];

export default function CabinOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortOptions} />
    </TableOperations>
  );
}
