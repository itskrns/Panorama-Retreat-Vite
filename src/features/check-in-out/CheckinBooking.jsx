import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { useSettings } from "../settings/useSettings";
import { useCheckin } from "./useCheckin";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [checkPaid, setCheckPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const moveBack = useMoveBack();

  const { booking, isLoading } = useBooking();
  const { isLoading: isLoadingSettings, settings } = useSettings();
  const { checkIn, isCheckingIn } = useCheckin();

  useEffect(
    function () {
      setCheckPaid(booking?.isPaid ?? false);
    },
    [booking]
  );

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!checkPaid) return;

    if (addBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extraPrice: optionalBreakfastPrice,
          totalPrice: optionalBreakfastPrice + totalPrice,
        },
      });
    } else {
      checkIn({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((addBreakfast) => !addBreakfast);
              setCheckPaid(false);
            }}
            id="breakfast"
          >
            Do you want to add breakfast for{" "}
            {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={checkPaid}
          onChange={() => setCheckPaid((check) => !check)}
          disabled={checkPaid || isCheckingIn}
          id="confirm"
        >
          {`I confirm that ${guests.fullName} has paid the total amount of ${
            !addBreakfast
              ? formatCurrency(totalPrice)
              : `${formatCurrency(
                  totalPrice + optionalBreakfastPrice
                )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                  optionalBreakfastPrice
                )}.)`
          }`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!checkPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
