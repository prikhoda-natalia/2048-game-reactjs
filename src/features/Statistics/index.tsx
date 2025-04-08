import Page from "~/components/Page";
import { useAppSelector } from "../App/hooks/useAppSelector";
import {
  selectFinishedGamesTotal,
  selectGivenUpGamesTotal,
  selectLostGamesTotal,
  selectWonGamesTotal,
} from "./store/selectors";
import NumberedBoxes, { NumberedBox } from "~/components/NumberedBoxes";

function Statistics() {
  const wonGamesTotal = useAppSelector(selectWonGamesTotal);
  const lostGamesTotal = useAppSelector(selectLostGamesTotal);
  const givenUpGamesTotal = useAppSelector(selectGivenUpGamesTotal);
  const gamesTotal = useAppSelector(selectFinishedGamesTotal);

  const stats: NumberedBox[] = [
    {
      title: "Games Played",
      value: gamesTotal,
    },
    {
      title: "Games Won",
      value: wonGamesTotal,
    },
    {
      title: "Games Lost",
      value: lostGamesTotal,
    },
    {
      title: "Games Given Up",
      value: givenUpGamesTotal,
    },
  ];

  return (
    <Page>
      <Page.Section hasPadding heading="Statistics">
        <NumberedBoxes items={stats} />
      </Page.Section>
    </Page>
  );
}

export default Statistics;
