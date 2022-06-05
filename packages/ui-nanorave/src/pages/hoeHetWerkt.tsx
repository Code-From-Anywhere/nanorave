import { Div, P } from "react-with-native";
import useStore from "../store";
import { RWNPage } from "../types";

const paragraphs = [
  `Het belangrijkste element van Nano Rave is de muzieksynchronisatie. Nano Rave laat jou eenvoudig een afspeellijst maken die gestreamd kan worden naar iedereen op je rave. Hierdoor kan iedereen via hun eigen bluetooth speaker de muziek "harder zetten".`,
  `Daarnaast geven we tips om je rave te starten en te organiseren (en dat kost niet veel moeite!). We helpen je vooral je rave in goede banen te leiden. Zie de "tips" pagina voor meer info`,
];

// Now your form can be rendered like this
// Make sure to provide the generic based on the inputs type interfaces
// otherwise your form won't be typesafe!

const Page: RWNPage = () => {
  const [name] = useStore("name");
  return (
    <Div scroll className="py-4 px-8 lg:px-20">
      <P className="text-3xl text-white">Hoe het werkt</P>
      {paragraphs.map((p, i) => (
        <P key={i} className="text-white">
          {p}
        </P>
      ))}
    </Div>
  );
};

Page.options = {};

export default Page;
