import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useNavigate } from "react-router";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();
  const { checkOut, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting: isDeletingBooking } = useDeleteBooking();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;

  const { id: bookingId, status } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Modal>
        <ButtonGroup>
          {status === "unconfirmed" && (
            <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
              Check-In #{bookingId}
            </Button>
          )}
          {status === "checked-in" && (
            <Button
              icon={<HiArrowUpOnSquare />}
              onClick={() => checkOut(bookingId)}
              disabled={isCheckingOut}
            >
              Check-Out
            </Button>
          )}

          <Modal.Open modalName="cosnfirm-delete">
            <Button
              icon={<HiArrowUpOnSquare />}
              disabled={isDeletingBooking}
              variation="danger"
            >
              Delete Booking
            </Button>
          </Modal.Open>

          <Button variation="secondary" onClick={moveBack}>
            Back
          </Button>
        </ButtonGroup>

        <Modal.Window modalName={"confirm-delete"}>
          <ConfirmDelete
            resourceName="bookings"
            disabled={isDeletingBooking}
            onConfirm={() =>
              deleteBooking(bookingId, { onSuccess: () => navigate(-1) })
            }
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
