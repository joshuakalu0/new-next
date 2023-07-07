import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useFormikContext } from "formik";

export default function FormButton({
  children,
  nofull,
  processing,
  ...others
}) {
  const { submitForm } = useFormikContext();
  const handlesumbit = () => {
    submitForm();
  };
  return (
    <div
      className={`flex ${!nofull && "w-full"} space-x-2 justify-end mr-3 mt-3`}
    >
      <Button
        color='success'
        onClick={handlesumbit}
        variant='contained'
        {...others}
        disabled={processing && processing}
      >
        {children}
      </Button>
    </div>
  );
}
