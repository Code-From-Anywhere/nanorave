import { Button, Div, Input, P } from "react-with-native";
import UI from "react-with-native-ui";
import { CodeLink } from "../components";
import useStore from "../store";
import { RWNPage } from "../types";

const Page: RWNPage = () => {
  const [name, setName] = useStore("name");
  const [email, setEmail] = useStore("email");
  return (
    <Div className="p-4 lg:p-20">
      <P className="text-white">
        Voor een goede rave heb je eigenlijk alleen maar bier en muziek nodig,
        en vooral gezelligheid. Met Nano Rave brengen we alles bij elkaar zodat
        je eenvoudig je eigen feestje kan organiseren, en die zou zomaar kunnen
        uitgroeien tot een microrave, minirave, of misschien wel een rave!
      </P>

      <Button className="bg-gray-700 hover:bg-gray-600 rounded-xl my-10 py-3 px-10">
        Start je rave
      </Button>
      {/* <Div className="bg-gray-200 rounded-xl p-4">
        <P>Your name:</P>
        <Input
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          native={{ onChangeText: setName }}
          className={UI.input}
        />

        <P>Your email:</P>
        <Input
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          native={{ onChangeText: setName }}
          className={UI.input}
        />
      </Div> */}
    </Div>
  );
};

Page.options = {
  title: "Home",
};

export default Page;
