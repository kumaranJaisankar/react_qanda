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
  useToast,
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
  clickingAdd,
}) => {
  const tost = useToast();
  console.log(subcategorysWith);
  return (
    <Stack spacing={4}>
      <h6>Sub Category with</h6>
      <Stack spacing={5} direction="column">
        <FormControl>
          <FormLabel>Sub Name</FormLabel>
          <Input
            placeholder="category name..."
            onChange={(e) =>
              setSetSubCategories({ ...subcategorysWith, name: e.target.value })
            }
          />
        </FormControl>
        <Checkbox
          defaultChecked
          onChange={() =>
            setSetSubCategories({
              ...subcategorysWith,
              hasQuestions: !subcategorysWith.hasQuestions,
            })
          }
        >
          Questions
        </Checkbox>
        <Checkbox
          onChange={() =>
            setSetSubCategories({
              ...subcategorysWith,
              hasSubCategories: !subcategorysWith.hasSubCategories,
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
        <Button
          colorScheme="blue"
          onClick={() => {
            tost({
              title: "Added sub category",
              status: "success",
              position: "bottom",
              isClosable: true,
            });
            clickingAdd();
            onCancel();
          }}
        >
          ADD
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const AddSubCategory = (props) => {
  const { onAddSubCategory } = props;
  const [subcategorysWith, setSetSubCategories] = useState({
    hasQuestions: true,
    hasSubCategories: false,
    name: "sub With Question",
  });

  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);
  const clickingAdd = () => {
    onAddSubCategory(subcategorysWith);
  };
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
              clickingAdd={clickingAdd}
              subcategorysWith={subcategorysWith}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AddSubCategory;
