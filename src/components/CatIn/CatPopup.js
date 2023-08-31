import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormLabel,
  Checkbox,
  CheckboxGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
const CatPopup = (props) => {
  const [subcategorysWith, setSetSubCategories] = useState({
    hasQuestions: true,
    hasSubCategories: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tost = useToast();
  const initialRef = React.useRef(null);
  const { addCategory } = props;
  const addCat = () => {
    const firstName = initialRef.current.value;
    addCategory(firstName, subcategorysWith);
    tost({
      title: `Added ${firstName}`,
      status: "success",
      position: "top",
      isClosable: true,
    });
    onClose();
  };
  return (
    <>
      <Button size="sm" onClick={onOpen} colorScheme="blue">
        Add Category
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel className="mb-0">Category name</FormLabel>
              <Input ref={initialRef} placeholder="Type Category name..." />
              <h6 className="mt-3">Category with</h6>
              <Stack spacing={3} direction="column">
                <Checkbox
                  defaultChecked
                  onChange={(e) =>
                    setSetSubCategories({
                      ...subcategorysWith,
                      hasQuestions: e.target.checked,
                    })
                  }
                >
                  Questions
                </Checkbox>
                <Checkbox
                  onChange={(e) =>
                    setSetSubCategories({
                      ...subcategorysWith,
                      hasSubCategories: e.target.checked,
                    })
                  }
                >
                  Sub Categories
                </Checkbox>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addCat}>
              ADD
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CatPopup;
