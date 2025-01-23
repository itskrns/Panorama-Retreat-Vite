import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

export default function AddCabins() {
  return (
    <>
      <Modal>
        <Modal.Open modalName="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window modalName="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      <Modal>
        <Modal.Open modalName="table">
          <Button>Show Table</Button>
        </Modal.Open>
        <Modal.Window modalName="table">
          <CabinTable />
        </Modal.Window>
      </Modal>
    </>
  );
}
