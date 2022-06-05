import { Button, Div, P } from "react-with-native";
import { toast } from "react-with-native-notification";
import { useModal } from "react-with-native-modal";
import { RWNPage } from "../types";
import { CodeLink } from "../components";
import { useAlert } from "react-with-native-alert";
const Page: RWNPage = () => {
  // fix this
  const alert = useAlert();
  const { handleModal } = useModal();
  return (
    <Div className="p-4 lg:p-20">
      {/* Markdown!!! */}
      <P className="text-white">Coming soon!</P>
    </Div>
  );
};

Page.options = {};
export default Page;
