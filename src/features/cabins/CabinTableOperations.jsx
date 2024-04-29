import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sorty by name (A-Z)" },
          { value: "name-desc", label: "Sorty by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sorty by price (low first)" },
          {
            value: "regularPrice-desc",
            label: "Sorty by price (hight first)",
          },
          { value: "maxCapacity-asc", label: "Sorty by capacity (low first)" },
          {
            value: "maxCapacity-desc",
            label: "Sorty by capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
