import styled from "styled-components";
import { HiDuplicate } from "react-icons/hi";
import { HiMiniPencil, HiTrash } from "react-icons/hi2";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

export default function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { createCabin } = useCreateCabin();

  const {
    id: cabinID,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }

  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fit upto {maxCapacity} guests</div>
        <Price>{regularPrice}</Price>
        {discount ? <Discount>{discount}</Discount> : <span>--</span>}

        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinID} />

            <Menus.List id={cabinID}>
              <Menus.Button icon={<HiDuplicate />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open modalName={"cabin-form"}>
                <Menus.Button icon={<HiMiniPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open modalName={"confirm-delete"}>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window modalName={"cabin-form"}>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window modalName={"confirm-delete"}>
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinID)}
            />
          </Modal.Window>
        </Modal>
      </Table.Row>
    </>
  );
}
