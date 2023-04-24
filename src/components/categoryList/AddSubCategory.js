import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Checkbox,
  CheckboxGroup,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
  ButtonGroup,
  Button,
  PopoverAnchor,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";
import "./index.css";
// 1. Create a text input component

// 2. Create the form
const Form = ({
  firstFieldRef,
  onCancel,
  setSetSubCategories,
  subcategorysWith,
}) => {
  console.log(subcategorysWith);
  return (
    <Stack spacing={4}>
      <h6>Sub Category with</h6>
      <Stack spacing={5} direction="column">
        <Checkbox
          defaultChecked
          onChange={() =>
            setSetSubCategories({
              ...subcategorysWith,
              questions: !subcategorysWith.questions,
            })
          }
        >
          Questions
        </Checkbox>
        <Checkbox
          onChange={() =>
            setSetSubCategories({
              ...subcategorysWith,
              subCategories: !subcategorysWith.subCategories,
            })
          }
        >
          Sub Categories
        </Checkbox>
      </Stack>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme="teal">ADD</Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const AddSubCategory = () => {
  const [subcategorysWith, setSetSubCategories] = useState({
    questions: true,
    subCategories: false,
  });

  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <button type="button" className="add-cate rounded-pill px-2">
            Add
          </button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />

            <PopoverCloseButton />
            <Form
              firstFieldRef={firstFieldRef}
              onCancel={onClose}
              setSetSubCategories={setSetSubCategories}
              subcategorysWith={subcategorysWith}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AddSubCategory;
