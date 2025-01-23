import Row from "../ui/Row";
import Heading from "../ui/Heading";
import AddCabins from "../features/cabins/addCabins";
import CabinTable from "../features/cabins/CabinTable";
import CabinOperations from "../features/cabins/CabinOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;
